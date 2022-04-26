const express = require('express');
const res = require('express/lib/response');
const app = express();
const port=800;
app.get("/",(req,res)=>{
    res.send("this is my frist express app by bestmodaljustin");
});
app.get("/contact",(req,res)=>{
    res.send("this is my frist contact app by bestmodaljustin");
});
app.get("/about",(req,res)=>{
    res.send("this is my frist about app by bestmodaljustin");
});
app.listen(port,()=>
{
    console.log(`This application start on port ${port}`);
});