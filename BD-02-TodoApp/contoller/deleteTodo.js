
const Todo = require('../models/Todo')


exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params 
        const response = await Todo.findByIdAndDelete({_id:id})
        res.status(200).json({
            success:true,
            data:response,
            message:'delete record successfully'
        })
    }catch(err){
        console.log(err.message)
        res.status(500).json({
            success:false,
            data:'network error',
            message:err.message
        })
    }
}