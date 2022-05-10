const mysql = require('mysql');
const myPort = 3306;
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'avclouddb.ci1hbrdpgnwh.us-east-2.rds.amazonaws.com',
    user: 'admin',
    port: myPort,
    password: 'adminadmin',
    database: '281DB'
});

pool.getConnection((err) => {
    if(err){
     console.log("failed to connect")
    }
    else{
        console.log("connected to mysql database");
    }
  });
  
module.exports = pool;