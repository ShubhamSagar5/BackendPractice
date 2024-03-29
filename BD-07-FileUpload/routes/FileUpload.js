const express = require('express')
const router = express.Router() 


const {loacalFileUpload}= require("../controller/FileUpload")
const {imgaeUploadCloud} = require('../controller/imageUploadCloud')
const {videoUpload} = require("../controller/videoUpload")
const {imageSizeReducer} = require("../controller/imageSizeReducer")

router.post('/localfile',loacalFileUpload)
router.post('/imageupload',imgaeUploadCloud)
router.post('/video',videoUpload)
router.post('/imageReducer',imageSizeReducer)


module.exports = router