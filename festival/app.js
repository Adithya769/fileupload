const express=require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const festivalRoute = require('./routes/festivals');
app.use('/festivals',festivalRoute);

//database connect
mongoose.connect("mongodb://localhost:27017/abcdeDb",()=>{
    console.log("Database Connected")
});

app.listen(7070);