
const Jwt = require("jsonwebtoken")

require('dotenv').config()

// auth,isStudent,isAdmin


exports.auth = (req,res,next) => {
    try{

        const token  = req.body.token 

        if(!token){
            return res.status(401).json({
                success:false,
                message:"token unavailable "
            })
        }

        try{
            const payload = Jwt.verify(token,process.env.JWTSECRET)
            req.user = payload



        }catch(err){
            return res.status(401).json({
                success:false,
                message:"token not verified"
            })
        }

        next()

    }catch(err){
        return res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }
}

exports.isStudent = (req,res,next) => {
    try{

        if(req.user.role !== 'student'){
            return res.status(401).json({
                success:false,
                message:"This is protectd route for students"
            })
        }
        next()

    }catch(err){
        return res.status(500).json({
            success:false,
            message:"This not verify its student or not"
        })
    }
}


exports.isAdmin = (req,res,next) => {
    try{

        if(req.user.role !== 'admin'){
            return res.status(401).json({
                success:false,
                message:"this is not verify its admin or not"
            })
        }

        next()

    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}