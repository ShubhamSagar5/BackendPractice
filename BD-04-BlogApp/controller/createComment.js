
const Post = require('../models/postSchema')
const Comment = require('../models/commentSchema')


exports.createComment = async(req,res) => {
try{

    const {post,user,body} = req.body
    const comment = new Comment({
        post:post,
        user:user,
        body:body
    })

    const savedComment  = await comment.save()
    const updateComment = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}})
                                .populate('comments').exec()

    res.status(200).json({
        result:updateComment
    })

}catch(err){
    return res.status(400).json({
        error:err.message
    })
}
}
