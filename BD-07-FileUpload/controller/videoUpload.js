
const User = require('../models/FileUpload')

const clodinary = require('cloudinary').v2

const isSupported = (type,supportedType) => {
    return supportedType.includes(type)
}

const uploadFileToCloudinary = async(file,folder) => {
        const option = {folder}
        option.resource_type = "auto"
    return await clodinary.uploader.upload(file.tempFilePath,option)
}

exports.videoUpload = async(req,res) => {

    try{

        const {name,email,tags}  = req.body 
        console.log(name,email,tags)
        const videoFile = req.files.videoFileName 

        console.log(videoFile)

        const supportedType = ["mp4","mov"]
        
        const fileType = videoFile.name.split(".")[1].toLowerCase()
console.log(fileType)
        if(!isSupported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:"File type is not supported"
            })
        
        }

        const response =await uploadFileToCloudinary(videoFile,"FileUploadPractice")
        console.log(response)

        const savedData = await User.create({
            name:name,
            email:email,
            tags:tags,
            image:response.secure_url
        })

        res.status(200).json({
            success:true,
            message:'Video Upload successfully',
            VideoUrl:response.secure_url
        })

    }catch(err){
        return res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}