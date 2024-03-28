
const File = require('../models/FileUpload')

const cloudinary = require('cloudinary').v2

const isFileTypeSupported = (type,supprotedTypes) => {
    return supprotedTypes.includes(type)
}

const uploadFileToCloud = async(file,folder) => {
    const option = {folder}
    console.log(file.tempFilePath)
     const data = await cloudinary.uploader.upload(file.tempFilePath,option)

     return data

}

exports.imgaeUploadCloud = async(req,res) => {
    try{

        const {name,tags,email} = req.body 
        console.log(name,tags,email)

        const file = req.files.imageFile 
        console.log(file) 
        
        // validation 

        const supprotedTypes = ["jpeg","jpg","png","gif"] 

        const fileType = file.name.split(".")[1].toLowerCase()

        console.log(fileType) 

        if(!isFileTypeSupported(fileType,supprotedTypes)){
            return res.status(400).json({
                success:false,
                message:"File type not supported"
            })
        }

        const response  =  await uploadFileToCloud(file,"FileUploadPractice")

        const savedData = await File.create({
            name:name,
            tags:tags,
            image:response.secure_url,
            email:email
        })

        res.status(200).json({
            success:true,
            response:savedData,
            message:"Data saved Successfully and" +"File Upload Successfully",

        })

       


    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}