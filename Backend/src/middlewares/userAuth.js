exports.userAuth = (req,res,next) =>{
    if(req.isAuth){
        return next()
    }
    else{
        return res.status(401).json({
            message : "you are not authorized "
        })
    }
}