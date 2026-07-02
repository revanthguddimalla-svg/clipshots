const express = require("express");
const postModel = require("../models/posts.model");

const router = express.Router();

router.get("" , async (req,res) => {
    try{
        let {page}=  req.query;
        if(!page) page = 1;
        const payload = await postModel.find({}).populate("user_id","user_id dp").sort({timestamps : -1}).skip((page-1)*10).limit(10).lean()
        if(!payload){
            return res.json({
                completed : true,
                message : "posts completed"
            })
        }
        return res.status(200).json([
            ...payload
        ])
    }catch(err){
        return res.status(500).json({
            err : err.message
        })
    }
})

module.exports = router