let mongo_uri;
let jwt_token
let image_kit
try{   
     mongo_uri = process.env.MONGO_URI 
     jwt_token = process.env.JWT_TOKEN
     image_kit = process.env.IMAGE_KIT
}catch(err){
    console.log(err.message)
}


module.exports = {mongo_uri,jwt_token,image_kit}