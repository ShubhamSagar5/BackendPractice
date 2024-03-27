const express = require('express')
const router = express.Router()


const {signUp} = require('../controller/signUp')
const {login} = require('../controller/login')

const {auth,isStudent,isAdmin} = require('../middlewares/auth')


router.post('/signUp',signUp)
router.post('/login',login)

// Protected Routes 

router.get('/test',auth,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:'This is auth routes, authentication successfull'
    })
})

router.get('/student',auth,isStudent,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"This is students autz student route"
    })
})


router.get('/admin',auth,isAdmin,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"This is admin autz its admin route"
    })
})

module.exports = router