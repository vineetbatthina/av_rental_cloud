const mysql = require('mysql');
const myPort = 3306;
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'cmpe281-sql.cb1wlfbxikzf.us-east-2.rds.amazonaws.com',
    user: 'admin',
    port: myPort,
    password: '123456789',
    database: '281_AV'
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