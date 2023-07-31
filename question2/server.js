const express = require("express")
const app = express()
const fs = require("fs")

app.get("/",(req,res)=>{
    fs.readFile("./index1.html","utf8",(err,data)=>{
        res.send(data)
    })
})
app.get("/gethello",(req,res)=>{
    fs.readFile("./index.html","utf8",(err,data)=>{
        res.send(data)
    })

})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})