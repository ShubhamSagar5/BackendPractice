

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.listen(3000,()=>{
    console.log('Hare krishana')
})

app

app.get('/',(request,response)=>{
    response.send('hariboll')
})


app.post('/api/cars',(req,res)=>{
    const {name,brand} = req.body
    console.log(name)
    console.log(brand)
    res.send('cars submitted successfully')
})