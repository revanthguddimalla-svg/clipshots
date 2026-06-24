const express = require("express")
const {upload} = require("../services/upload")

// M O D E L S 
const userModel = require("../models/user.model")
const postModel = require("../models/posts.model")

// C O N T R O L L E R S
const {userProfile} = require("../controller/userProfile.controller")

const multer = require("multer")
const router = express.Router()

const storage = multer.memoryStorage();
const uploads = multer({ storage : storage })

// L O G O U T 

router.post("/logout", (req,res) => {
    res.clearCookie("token")
    return res.status(200).json({
        message : "logged out successfully"
    })

})

//   P R O F I L E

router.get("/profile",userProfile)

router.get("/profile/:id", async (req,res)=>{
    const {id} = req.params;
    if(req._id == id ) {
        return userProfile(req,res)
    }
    const payload = await userModel.findOne({
        _id : id
    }).populate("posts").lean()
    if(!payload){
      return  res.sendStatus(404)
    }
    return res.status(200).json({
        ...payload,
        notUser : true
    })

    
})

router.patch("/profile/dp" ,uploads.single("image"),async (req,res) =>{
    try{
        const {url} = await upload(req.file.buffer);
        const user = await userModel.findOneAndUpdate({
            _id : req._id
        },{
            $set : {dp : url}
        },{new : true})
        return res.status(200).json({
            ...user,
            message : "successfully changed"
        })
    }catch(err){
        return res.json({
            err : err.message
        })
    } 
})






//   P O S T S

router.post("/posts",uploads.single("image"),async (req,res)=>{

    try{
    const {url , thumbnailUrl} = await upload(req.file.buffer)
    const {caption} = req.body
    const post = new postModel({
        img_url : url ,
        thumbnail_url : thumbnailUrl,
        user_id : req._id,
        caption : caption
    })
    await post.save()
    await userModel.updateOne({
        user_id : req.user_id
    },{
        $push  : {
            posts  : post._id
        }
    })
    return res.status(201).json({
        message : "post created successfully"
    })
    }catch(err){
        console.log(err.message)
    }
} )

module.exports = router