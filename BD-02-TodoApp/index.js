

const express = require('express')
const app = express()

require("dotenv").config()

const PORT = process.env.PORT || 4000

app.use(express.json())

const todoRoutes = require("./routes/todo")

app.use("/api/v1",todoRoutes)

app.listen(process.env.PORT,()=>{
    console.log("Server is Running on Port"+" "+ process.env.PORT)
})

const dbConnect = require("./config/database")
dbConnect()

app.get("/",(req,res)=>{
    res.send(`<h1>This is HomePage</h1>`)
})