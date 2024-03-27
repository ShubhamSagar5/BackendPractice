
const express = require('express')

const app = express() 

require('dotenv').config()

app.use(express.json())

const Port = process.env.Port || 4000 

const routerPath = require('./routes/userRoutes')
app.use('/api/v1',routerPath)

const databaseConnection = require('./config/database')
databaseConnection()

app.listen(Port,()=>{
    console.log("Server is Running on Port No "+ Port)
})

