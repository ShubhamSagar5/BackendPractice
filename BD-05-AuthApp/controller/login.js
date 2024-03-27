
const bcrypt = require('bcrypt')
const jwt =  require('jsonwebtoken')
const User  = require('../models/user')

require('dotenv').config()

exports.login = async(req,res) => {

    try{

        const {email,password} = req.body 

        if(!email ||   !password){
            return res.status(400).json({
                success:false,
                message:"Please fill all deatils"
            })
        }

        let user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not register not find"
            })
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role
        }

        if(await bcrypt.compare(password,user.password)){

            const token = jwt.sign(payload,process.env.JWTSECRET,{
                expiresIn:"2h"
            }) 

            user = user.toObject()
            console.log(user)
            user.token = token
            console.log(user)
            user.password = undefined 
            console.log(user)

        
            const options = {
                expires:new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token:token,
                user:user,
                message:'user Loggined successfully'

            })

        }else{
            return res.status(400).json({
                success:false,
                message:"Password not match"
            })
        }




    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }

}