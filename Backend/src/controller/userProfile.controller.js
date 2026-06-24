const userModel = require("../models/user.model")

exports.userProfile =async (req,res)=>{
    try{
        const payload = await userModel.findOne({
        _id : req._id
        }).populate("posts").lean()
        return res.json({
            ...payload
        })  
    }catch(err){
        console.log(err.message)
        return res.sendStatus(500)
    }
}