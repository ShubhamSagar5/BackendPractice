const express = require('express')

const router = express.Router() 

const {signUp} = require('../controller/signUp')
const {login} = require('../controller/login')

const {auth,isStudent,isAdmin} = require('../middleware/auth')

router.post('/signup',signUp)
router.post('/login',login)

// Protected Route 

router.get('/test',auth,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"This is authneticate path "
    })
})

router.get('/student',auth,isStudent,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to Student Route successfull"
    })
})

router.get('/admin',auth,isAdmin,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to admin route successfull"
    })
})


module.exports = router