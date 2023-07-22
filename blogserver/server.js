require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const cors = require('cors')
const Blog = require('./models')

const app = express()
app.use(express.json({limit: '100mb'}));
app.use(cors())
app.use(bodyparser.json())



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then((result)=>{
    console.log("db connected")
})
.catch((err) =>{
    console.log(err);
}); 


app.get('/',(req,res)=>{
    res.status(200).send("WELCOME USERS");
})
app.post('/create',async(req,res)=>{
    console.log(req.body)
    const blog =  new Blog(req.body);
    await blog.save().then(()=>{
        console.log("saved");
    }).catch((err)=>{
        console.log(err);
    })
    res.status(200).json({message:"Success"})
})


app.get('/blog',async(req,res)=>{
    await Blog.find().sort({updatedAt:-1}).then((result)=>{
        res.json(result)
        console.log("Sended");
    })
})





app.listen(5000, ()=>console.log("Server OK"));
