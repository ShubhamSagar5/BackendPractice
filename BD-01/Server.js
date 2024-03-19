

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.listen(3000,()=>{
    console.log('Hare krishana')
})



app.get('/',(request,response)=>{
    response.send('hariboll')
})


app.post('/api/cars',(req,res)=>{
    const {name,brand} = req.body
    console.log(name)
    console.log(brand)
    res.send('cars submitted successfully')
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', { 
    useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("MongoDB connected successfully");
    // Start the Express server once MongoDB is connected
  })
.catch((err) => {
    console.error("MongoDB connection error:", err);
  });