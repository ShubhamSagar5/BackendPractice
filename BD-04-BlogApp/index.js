const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())

const Port  = process.env.PORT || 4000 


const blogappRoutes = require('./routes/blogRoutes')

app.use('/api/v1',blogappRoutes)

app.listen(Port,()=>{
    console.log(`Server is Running on Port ${Port}`)
})

const databaseConnection = require('./config/database')
databaseConnection()

app.get("/",(req,res)=>{
    res.send(`<h1>This is Home Page</h1>`)
})