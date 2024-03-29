const express = require('express')
const router = express.Router() 


const {loacalFileUpload}= require("../controller/FileUpload")
const {imgaeUploadCloud} = require('../controller/imageUploadCloud')
const {videoUpload} = require("../controller/videoUpload")

router.post('/localfile',loacalFileUpload)
router.post('/imageupload',imgaeUploadCloud)
router.post('/video',videoUpload)


module.exports = router