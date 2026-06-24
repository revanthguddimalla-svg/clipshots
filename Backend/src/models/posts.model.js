const mongoose = require("mongoose")



const postSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        required:true
    },
    img_url:String,
    thumbnail_url : String,
    caption:{
        type:String,
        maxlength:100
    },

    likes:{
        type : [mongoose.Types.ObjectId],
        default : []
    },

    comments:{
     type : [{
        user_id:mongoose.Types.ObjectId,
        comment:{
            type:String,
            maxlength:100
        }
    }],
    default : []
    }
})


const postModel=mongoose.model("post",postSchema)

module.exports = postModel
