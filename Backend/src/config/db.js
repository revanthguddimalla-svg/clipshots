const {mongo_uri} = require("./env")
const mongoose = require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect(mongo_uri)
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB