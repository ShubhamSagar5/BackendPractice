
const User = require('../models/FileUpload')

const cloudinary = require('cloudinary').v2 

const isFileTypeSupported = (file,supprotedType) => {
    return supprotedType.includes(file)
}

const uploadFileToCloud = async(file,folder,quality) => {

    const option = {folder} 
    option.resorce_type = "auto"
    if(quality){
        option.quality = quality
    }
    return await cloudinary.uploader.upload(file.tempFilePath,option)
}

exports.imageSizeReducer = async(req,res) => {
    try{

        const {name,email,tags} = req.body 
        console.log(name,email,tags) 

        const imageFile = req.files.imageFile
        console.log(imageFile)
        
        const supprotedType = ["jpeg","jpg","png","gif"] 

        const imageFileType =  imageFile.name.split(".")[1].toLowerCase()

        console.log(imageFileType)

        if(!isFileTypeSupported(imageFileType,supprotedType)){
            return res.status(400).json({
                success:false,
                message:"File type not supported"
            })
        }
        console.log("checked response upload to cloud")

        const response = await uploadFileToCloud(imageFile,"FileUploadPractice",10)
        console.log(response)

        const savedData = await User.create({
            name:name,
            email:email,
            tags:tags,
            image:response.secure_url
        })

        res.status(200).json({
            success:true,
            message:"Image Upload Successfully"
        })
        


    }catch(err){
        return res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}