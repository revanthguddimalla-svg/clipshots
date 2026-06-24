const jwt = require("jsonwebtoken")
const {jwt_token} = require("../config/env")
const userModel = require("../models/user.model")
exports.authenticate = async (req,res,next) =>{
    const token = req.cookies.token
    // console.log(token)
    if(!token){
        req.isAuth = false;
        return next()
    }
    try{
        const {user_id} = jwt.verify(token,jwt_token)
        if(!user_id){
            throw new Error("no user id")
        }
        const user = await userModel.findOne({
            user_id : user_id
        })
        if(!user){
            throw new Error("no user with the id")
        }
        req.isAuth = true;
        req.user_id = user_id
        req._id = user._id
        return next()
    }
    catch(err){
        console.log(err.message)
        req.isAuth = false
        return next()
    }
}