const express = require('express')
const router = express.Router() 


const {loacalFileUpload}= require("../controller/FileUpload")

router.post('/localfile',loacalFileUpload)


module.exports = router