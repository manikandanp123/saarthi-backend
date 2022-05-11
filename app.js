const express=require("express");
const app=express();
const mongoose=require("mongoose");
const userRoutes=require("./routes/userRoutes");
const albumRoutes=require("./routes/albumRoutes");
const photoRoutes=require("./routes/photoRoutes");

mongoose.connect("mongodb://localhost:27017/saarthi");

app.use("",userRoutes);
app.use("",albumRoutes);
app.use("",photoRoutes);

// app.get("/",(req,res)=>{
//     res.send("ok");
// })

app.listen(5000,()=>console.log("server at 5000"));