let express=require('express')
let app=express()
let bodyParser = require ('body-parser')
let cors = require('cors')
let data = require('./data')
let port= 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req,res) =>
res.send('Hello world'))
app.get('/animals',(req,res) =>
res.json(data.animals)
)

app.listen(port)
console.log('api running on'+ port + ':')