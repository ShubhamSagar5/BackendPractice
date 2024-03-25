const express = require('express')
const app = express()

require('dotenv').config()


const Port = process.env.PORT || 4000

app.use(express.json())

const userRoutes = require('./routes/user')
app.use("/api/v1/",userRoutes)

const databaseconnection = require('./config/database')
databaseconnection()

app.listen(Port,(req,res)=>{
    console.log(`Server is running on port no ${Port}`)
})