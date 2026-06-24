const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    user_id : {
        type : String,
        unique : true,
        required : true,
        maxlength : 20,
        index : true
    },

    dp : {
        type : String,
        default : "https://i.pinimg.com/736x/ee/a5/03/eea5039dae62906cdc485dc8e8c44223.jpg"
    }

    ,
    name : {
        type : String,
        required : true,
        maxlength : 20
    },
    hpassword : {
        type : String,
        required : true,
        select : false
    },
    bio : {
        type : String,
        maxlength : [100 , "bio should not exceed 100 characters"] 
    },
    posts : {
        type : [mongoose.Types.ObjectId],
        ref : "post"
    }

})



const userModel = mongoose.model("user",userSchema)

module.exports = userModel