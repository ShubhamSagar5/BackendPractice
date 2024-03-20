

const Todo = require('../models/Todo')

exports.getAllTodos = async(req,res) => {

    try{

        const response = await Todo.find({})
        res.status(200).json({
            success:true,
            data:response,
            message:"All record fetch"
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            data:'error ya hai',
            message:err.message
        })
    }

}


exports.getSingleTodo = async(req,res) => {
    try{
        const id = req.params.id 
    const response = await Todo.findById({_id:id})
    
    if(!response){
        return res.status(400).json({
            success:false,
            data:'ntw error',
            message:'not found'
        })
    }
    
    res.status(200).json({
        success:true,
        data:response,
        message:"Successfully fetched",

    })
}catch(err){
    console.log(err)
    res.status(500).json({
        success:false,
        data:'network error',
        message:err.message
    })
}
}
