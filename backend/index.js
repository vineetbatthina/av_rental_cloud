const config = require("config");

const user = require("./routes/users");
const auth = require("./routes/auth");
const av = require("./routes/av");
const socketRoute = require("./routes/socket");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const sockets = [];
const SensorInfo = require('./models/sensorinfo');
const Testdata = require('./models/test');
const mysql = require('mysql');
const myPort = 3306;
var bodyParser = require('body-parser');


const express = require("express");
const app = express();
app.use(bodyParser.json());

const pool = mysql.createConnection({
  host: 'database-1.ci1hbrdpgnwh.us-east-2.rds.amazonaws.com',
  user: 'admin',
  port: 3306,
  password: 'adminadmin',
  database: '281DB'
});

pool.connect((err) => {
  if(err){
   console.log("failed to connect"+err);
  }
  if(!err){
      console.log("connected to mysql database");
  }
});

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://santhoshsai3:December2020@cluster0.jfmux.mongodb.net/SensorData?retryWrites=true&w=majority" , {
    // retry to connect 
    reconnectTries: 1,
    // wait 5 seconds before retryMon
    reconnectInterval: 5000,
  })
  .then(() => console.log("Connected to MongoDatabase"))
  .catch((err) => console.log("Failed to connect to Database"));


const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/av", av);
app.use("/api/socket", socketRoute);

app.post('/statusupdate/:data',(req,res)=>{
  console.log("data is"+JSON.stringify(req.params));
  var status = JSON.parse(req.params.data).status;
  var vid = JSON.parse(req.params.data).vid;
  console.log("status"+status+ "vid"+vid);
  var moving ="Moving";
  var moved = "Moved";
  if(status=="Idle"){
    pool.query(`UPDATE vehicledetails SET vcurrentstatus = '${moving}', roadservice = 'Active' WHERE vid='${vid}' AND vcurrentstatus = 'Idle'`, (err,result)=>{
      if(err){
        console.log("error"+err);
      }
      else{
        console.log("result"+JSON.stringify(result));
        res.send("success");
      }
    });
  }
  if(status=="Moving"){
    pool.query(`UPDATE vehicledetails SET vcurrentstatus = '${moved}' WHERE vid='${vid}' AND vcurrentstatus = 'Moving'`, (err,result)=>{
      if(err){
        console.log("error"+err);
      }
      else{
        console.log("result"+JSON.stringify(result));
        res.send("success");
      }
    });
  }
 

})

app.get('/sensorinfo',(req,res)=>{
 
  SensorInfo.findOne((err,result)=>{
    console.log("hello world")
     if(err){
       console.log(err);
     }
     else{
       console.log("hello entered here"+JSON.stringify(result))
      res.send(JSON.stringify(result));
     }
   });
});

app.get('/admindash',(req,res)=>{
  pool.query("SELECT * FROM userdetails", (err,result)=>{
    if(err){
      console.log("error"+err);
    }
    else{
      console.log("result"+JSON.stringify(result));
      res.send(result);
    }
  });
 
});

const httpServer = require("http").createServer(app);
const options = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
};
const io = require("socket.io")(httpServer, options);
const { SocketHandler } = require("./socketHandler");

io.on("connection", (socket) => {
  const jwtToken = socket.handshake.query.jwtToken;
  if (jwtToken != "null") {
    console.log("New socket client added", jwtToken);

   // console.log("New socket client added"+JSON.stringify(sockets));

    sockets.push({ jwtToken, socket });
    console.log("After Socket push");
    SocketHandler.addSocket(socket.handshake.query.jwtToken, socket);
  }

  socket.on("disconnect", () => {
    const jwtToken = socket.handshake.query.jwtToken;
    if (jwtToken != "null") {
      console.log("Disconnecting client", socket.handshake.query.jwtToken);
      SocketHandler.deleteSocket(socket);
    }
  });
});

const port = process.env.PORT || config.get("port");
httpServer.listen(port, () => console.log(`Listning to port ${port}.... `));
