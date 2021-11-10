const express = require('express');
const mongoose = require('mongoose');
const festivalschema = mongoose.Schema({
    festivalname:{
        type:String,
        required:true
    },
    description:{
        festivaldate:{
            type:String,
            required:true
        },
        festivaldescr:{
            type:String,
            required:true
        }
    }

})
module.exports=mongoose.model('Festival',festivalschema);
