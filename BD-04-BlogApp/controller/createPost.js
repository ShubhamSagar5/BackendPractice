
const Post = require('../models/postSchema')


exports.createpost = async(req,res) => {
    try{

        const {title,body} = req.body
        const postobj = new Post ({
            title:title,
            body:body
        })

        const saveobj = await postobj.save()
        res.status(200).json({
            response:saveobj
        })

    

    }catch(err){
       return  res.status(500).json({
            err:err.message
        })
    }
}


exports.getAllpost = async(req,res) => {
    try{

        const post = await Post.find({})
        res.status(200).json({
            result:post
        })

    }catch(err){
        return res.status(400).json({
            error:err.message
        })
    }
}