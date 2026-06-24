const express=require("express")
const router =express.Router()
const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { jwt_token } = require("../config/env")

router.post("/register",async (req,res)=>{
    try{
        const {user_id , name , password , bio } = req.body
        if(!user_id || !name || !password ){
            return  res.status(400).json({
                message : "enter required feilds "
            })
        }
        const hpassword = await bcrypt.hash(password,10); 
        const user = new userModel({
            name,
            hpassword,
            bio,
            user_id
        })
        user.save()
        return res.status(201).json({
            message : "user created successfully"
        })
    }catch(err){
        return res.status(400).json({
            error : err.message
        })
    }
})

router.post("/login",async (req,res) => {
    const {user_id , password } = req.body
    const user = await userModel.findOne({
        user_id 
    }).select("+hpassword")
    if(!user){
        return res.status(400).json({
          message : "invalid user id "
        })
    }
    
    const isMatch = await bcrypt.compare(password,user.hpassword)
    if(isMatch){

        const token = await jwt.sign({user_id},jwt_token,{
            expiresIn : "7d"
        })
        res.cookie("token",token,{
            httpOnly : true,
            sameSite : "strict",
            maxAge: 7*24*60*60*1000
        })

        return  res.status(200).json({
            message : "login successfull"
        })
    }
})




module.exports = router 