
const Post = require("../models/postSchema")
const Like = require('../models/likesSchema')


exports.createlike = async(req,res) => {
    try{
        
        const {post,user} = req.body
        const like = new Like({
            post:post,
            user:user
        })

        const savedLike = await like.save()

        const updateLike = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
                            .populate('likes').exec()
        
                res.status(200).json({
                    result:updateLike
                })

    }catch(err){
        return res.status(400).json({
            error:err.message
        })
    }
}


exports.unlike = async(req,res) => {
    try{

        const {post,like} = req.body 
        const deleteLike = await Like.findOneAndDelete({post:post, _id:like})

        const updatePost = await Post.findByIdAndDelete(post,{$pull:{likes:deleteLike._id}},{new:true})

        .populate('likes').exec()

        res.status(200).json({
            result:updatePost
        })

    }catch(err){
        return res.status(400).json({
            error:err.message
        })
    }
}