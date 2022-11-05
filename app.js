
const express = require('express');
const mysql = require ('mysql');

// connection with the database 
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
   database :'nodemysql'
  });
  
  // connection

db.connect((err)=>{
if(err)
{
    throw err ;
}

    console.log("db connected");

  });

const app = express ();

// creating DB 

app.get('/createdb', (req, res)=>{
db.query("CREATE DATABASE nodemysql", (err, result) =>{
    if (err) throw err;
    console.log(result);
    res.send('Database created.....')
  });
});

// creating tables 

app.get('/createpoststable', (req, res)=>{
    let sql = "CREATE TABLE posts (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";  
    db.query(sql, (err, result) =>{
        if (err) throw err;
        console.log(result);
        res.send('poststable created.....')
      });
    });
    
app.listen ('5000', ()=>
{
    console.log ("logged in successfully.....");
});