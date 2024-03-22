

const mongoose = require('mongoose')

require('dotenv').config()

const databaseConnection = () => {
    mongoose.connect(process.env.Database_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("database connect succesfully")})    
    .catch((err)=>{
        console.log(err.message)
    })
}

module.exports = databaseConnection