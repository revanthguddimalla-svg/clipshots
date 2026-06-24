require("dotenv").config()
require("dns").setServers(["1.1.1.1","8.8.8.8"])

const app=require('./src/app')
const connectDB = require("./src/config/db")

connectDB()

app.listen(3000,()=>{
    console.log("App is running on 3000 port");
})