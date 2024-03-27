
const mongoose = require('mongoose')

require('dotenv').config()


const databaseConnection = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Database connect successfully")
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

module.exports = databaseConnection