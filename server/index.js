const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path=require("path");
const _dirname=path.dirname("")
const buildpath=path.join(_dirname,"../client/build")
const fs = require("fs");
const { default: mongoose } = require("mongoose");
dotenv.config();
const app = express();
const blogposts=require('./routes/route')


// Middleware
app.use(express.json());
app.use(express.static(buildpath))
app.use(cors({"origin":"*"}));
app.use(express.urlencoded({extended:false}))
app.use('/kalyan',blogposts);


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT||8000,()=>{
        console.log('Running on port 8000')
    })
})
.catch((err)=>{console.log(err)});