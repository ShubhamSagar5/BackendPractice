

const User = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config()

exports.login = async(req,res) => {
    try{

        const {email,password} = req.body 

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields Required"
            })
        }

        let user  = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                success:false,
                message:"User Not found Please Sign Up"
            })
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role
        }

        if(await bcrypt.compare(password,user.password)){

            const token =  jwt.sign(payload,process.env.JWTSECRET,{
                expiresIn:"2h"
            })

            
            user.token = token
            user.password = undefined            

            const option = {
                expires : new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            }

           

            return res.cookie("token",token,option).json({
                success:true,
                user:user,
                token:token,
                message:"User Login successfully"
            }) 



        }else{
            return res.status(400).json({
                success:true,
                message:"password not match"
            })
        }

        



    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Login failed"
        })
    }
}