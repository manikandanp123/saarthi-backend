const express = require("express");
const router = express.Router();
const albums = require("../model/Albums");

router.use(express.json());

router.get("/album", (req, res) => {
    res.json('album');
});

router.post("/album", async (req, res) => {
    console.log(req.body);
    var finding = await albums.insertMany({
        user_id: req.body.user_id,
        Name: req.body.Name,
        update_date: req.body.update_date
    })
    if(finding.length>0){
        res.send(finding);
    }else{
        res.send("Failed to update data");
    }
})

router.post("/all-album",async(req,res)=>{
    let finds=await albums.find();
    if(finds.length>0){
        res.send(finds);
    }else{
        res.send("error");
    }
})

router.get("/onealbum/:id",async(req,res)=>{
    let onealbum=await albums.findOne({"_id":req.params.id});
    console.log(onealbum);
    if(onealbum){
        res.send(onealbum);
    }else{
        res.send("failed");
    }
})




module.exports = router;