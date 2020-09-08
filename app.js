const express= require('express');
const tedious= require('tedious');
const sql = require("mssql")

// const Drug=require('./model/drug')
const sequelize= require('./connection/database')

const app=express();

app.get('/',(req,res)=>{
    res.json({'message':"working"})
})
// app.get('/new',(req,res)=>{
//     Drug.create({name:"Drug A",price:10,description:"Drug A description"})
//     .then(data=>{
//         res.json("success")})
//     .catch(err=>console.log(err))

// })

 sequelize   
    .sync()
    .then(result=>{
        app.listen(3000,()=>{console.log('server started at 3000')})
    })
    .catch(err=>console.log(err))