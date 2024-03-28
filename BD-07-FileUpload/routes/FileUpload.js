const express = require('express')
const router = express.Router() 


const {loacalFileUpload}= require("../controller/FileUpload")
const {imgaeUploadCloud} = require('../controller/imageUploadCloud')

router.post('/localfile',loacalFileUpload)
router.post('/imageupload',imgaeUploadCloud)


module.exports = router