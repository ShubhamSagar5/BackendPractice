

const File = require("../models/FileUpload")

exports.loacalFileUpload = async(req,res) => {

    try{

        const file = req.files.file
        console.log(file)

        let path = __dirname + "/file/" + Date.now() + `.${file.name.split('.')[1]}`

        file.mv(path,(err)=>{
            console.log(err)
        })
        res.status(200).json({
            success:true,
            message:"File upload successully "
        })

    }catch(err){
        return res.status(500).json({
            success:false,
            message:"File can not be upload"
        })
    }
}