const express = require('express')
const app = express()

require('dotenv').config()

const Port = process.env.PORT 

app.use(express.json())

const cloudinaryConnect = require('./config/cloudinary')
cloudinaryConnect.cloudConnect()

const fileupload = require('express-fileupload')
app.use(fileupload({
    useTempFiles:true,
    tempFileDir: '/tmp/'
}))

const fileRoute = require("./routes/FileUpload")
app.use('/api/v1',fileRoute)

const databaseConnect = require('./config/database')
databaseConnect()

app.listen(Port,()=>{
    console.log(`Server is Running on Port No ${Port}`)
})
