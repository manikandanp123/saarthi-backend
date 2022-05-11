const express=require("express");
const router=express.Router();
const bodyParser=require("body-parser");
const photos=require("../model/Photos");

router.use(bodyParser());

router.get("/photos",(req,res)=>{
    res.json('photo');
});

router.post("/photos",async(req,res)=>{
    console.log(req.body);
    const inserting=await photos.insertMany({
        album_id:req.body.album_id,
        user_id:req.body.user_id,
        Name:req.body.Name,
        img:req.body.img,
    });
    if(inserting.length>0){
        res.send(inserting);
    }else{
        res.send("failed data");
    }
})
module.exports=router;