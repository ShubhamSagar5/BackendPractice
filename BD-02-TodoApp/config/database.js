

const mongoose = require('mongoose')

require("dotenv").config()

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("DB ka Connection successfull done")})
.catch((err)=>{
    console.log("issue in database connection")
    console.log(err.message)
    process.exit(1)
})

}


module.exports = dbConnect