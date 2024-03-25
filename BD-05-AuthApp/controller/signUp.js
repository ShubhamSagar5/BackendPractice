

const bcrypt  = require('bcrypt')
const User = require('../models/user')

exports.signUp = async(req,res) => {

    try{

        const {name,email,password,role} = req.body 

       
        const userData = await User.findOne({email})

        if(userData){
            return res.status(400).json({
                message : "User alreday available"
            })
        }

        let hashPassword

        try{
            hashPassword = await bcrypt.hash(password,10)

        }catch(err){
            return res.status(500).json({
                message:"error in hashing in password "
            })
        }

        const savedData = await User.create({
            name:name,
            email:email,
            password:hashPassword,
            role:role
        })

       return res.status(200).json({
            message:"User Created Successfully"
        })

    }catch(err){
        return res.status(500).json({
            message:err.message
        })
    }

}