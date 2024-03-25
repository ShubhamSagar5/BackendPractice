const express = require('express')
const router = express.Router()


const {signUp} = require('../controller/signUp')


router.post('/signUp',signUp)


module.exports = router