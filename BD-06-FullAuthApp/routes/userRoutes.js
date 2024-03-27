const express = require('express')

const router = express.Router() 

const {signUp} = require('../controller/signUp')
const {login} = require('../controller/login')

router.post('/signup',signUp)
router.post('/login',login)


module.exports = router