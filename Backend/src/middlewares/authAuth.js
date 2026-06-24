exports.authAuth = (req,res,next) =>{
    if(req.isAuth) {
        return res.status(401).json({
            message : "already loged in "
        })
    }
   return next()
}