const express=require('express');
const cookieParser = require('cookie-parser');

//routers
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")
const publicRouter = require("./routes/public")


//middlewares 
const {authAuth} = require("./middlewares/authAuth")
const {userAuth} = require("./middlewares/userAuth")
const {authenticate} = require("./middlewares/authenticate")
const app=express();


app.use(express.json())
app.use(cookieParser())
app.use(authenticate)

app.use("/",publicRouter)
app.use("/user",userAuth,userRouter)
app.use("/auth",authAuth,authRouter)

module.exports=app;