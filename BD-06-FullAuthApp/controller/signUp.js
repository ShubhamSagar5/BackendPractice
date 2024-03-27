
const User = require('../models/userSchema')
const bcrypt = require('bcrypt')

exports.signUp = async(req,res) => {
    try{

        const {name,email,password,role} = req.body 

        

        if(!name || !email || !password || !role){
            return res.status(400).json({
                success:false,
                message:"All fields are Required"
            })
        }

        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({
                success:false,
                message:"User Already register"
            })
        }

        let hashPassword 

        try{

            hashPassword = await bcrypt.hash(password,10)

        }catch(err){
            return res.status(500).json({
                success:false,
                message:"Error occur in hashing password"
            })
        }

        const userObj = await User.create({
            name:name,
            email:email,
            password:hashPassword,
            role:role
        })
      return  res.status(200).json({
            success:true,
            message:"User Created Successfully"
        })

    }catch(err){
        return  res.status(500).json({
            success:false,
            message:"User Not Created Error"+err.message
        })
    }
}