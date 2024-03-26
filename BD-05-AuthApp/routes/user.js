const express = require('express')
const router = express.Router()


const {signUp} = require('../controller/signUp')
const {loginin} = require('../controller/login')

router.post('/signUp',signUp)
router.post('/login',loginin)

module.exports = router