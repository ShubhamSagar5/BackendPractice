const mongoose = require('mongoose')

require('dotenv').config()


const databaseconnection  = () => {
    mongoose.connect(process.env.DATABAS_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log('Database connect successfully')})
    .catch((err)=>{
        console.log(err.message)
    })
}

module.exports = databaseconnection