const Todo = require('../models/Todo')

exports.updateTodo= async(req,res) => {
try{
    const id = req.params.id 
    const{title,description} = req.body
    const response = await Todo.findByIdAndUpdate({_id:id},{title:title,description:description,updatedAt:Date.now()})

    res.status(200).json({
        success:true,
        data:response,
        message:"successfull"
    })

}catch(err){
    console.log(err.message)
    res.status(500).json({
        success:true,
        data:'network issue',
        message:err.message
    })
}
}