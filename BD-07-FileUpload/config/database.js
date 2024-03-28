const mongoose = require('mongoose')

require('dotenv').config()

const databaseConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useunifiedTopology:true
    })
    .then(()=>{
        console.log("Database connect successfully")
    }).catch((err)=>{
        console.log(err.message)
    })
}

module.exports = databaseConnect