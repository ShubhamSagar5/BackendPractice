const express = require('express')
const router = express.Router()

const {createTodo} = require("../contoller/createTodo")
const {getAllTodos,getSingleTodo} = require('../contoller/getAllTodo')
const {updateTodo} = require("../contoller/updateTodo")
const {deleteTodo} =require("../contoller/deleteTodo")

router.post("/createTodo",createTodo)
router.get("/getTodos",getAllTodos)
router.get("/getTodos/:id",getSingleTodo)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)

module.exports = router