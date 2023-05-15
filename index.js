const express=require("express")
const mongoose=require("mongoose")
var app=express()
// middleeare for converting data into json fromat
app.use(express.json())
const rout=require("./ROUTERS/userRoutes")
// middleware for routing
app.use("/api",rout)
// data base  connection
mongoose.connect("mongodb://127.0.0.1:27017/task2").then(()=>{console.log("DataBase connected")}).catch(("NOt connectd"))
// listen to port no 5000
app.listen(5000,()=>{console.log("server is connected....")})