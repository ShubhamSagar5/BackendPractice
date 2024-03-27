// auth , isStudent , isAdmin 

const jwt = require('jsonwebtoken')
require('dotenv').config()


exports.auth = async(req,res,next) => {
    try{

        const token = req.cookies.token

        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token is missing"
            })
        }

        try{

            const payload = jwt.verify(token,process.env.JWTSECRET)

            req.user = payload

           

        }catch(err){
            return res.status(400).json({
                success:false,
                message:"Token not Verified or not matched"
            })
        }
 next()


    }catch(err){
        return res.status(500).json({
            success:false,
            message:"This is auth route error"
        })
    }
}


exports.isStudent = async(req,res,next) => {

    try{
        if(req.user.role !== 'Student'){
       console.log(req.user)
            return res.status(400).json({
            success:false,
            message:"This is protected route for students only"
        })
    }

    next()
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Not verified its student or not"
        })
    }
}


exports.isAdmin = async(req,res,next) => {
try{

    if(req.user.role !== 'Admin'){
        return res.status(400).json({
            success:false,
            message:"This is protected route for only admin"
        })
    }

    next()

}catch(err){
    return res.status(500).json({
        success:false,
        message:"Not verified its Admin or not"
    })
}
}