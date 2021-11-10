const express = require('express');
const festival = require('../models/festival');

// const mongoose = require('mongoose');
const router = express.Router();
const Festival = require('../models/festival');


router.post('/',(req,res)=>{
    const festival = new Festival({
        festivalname:req.body.festivalname,
        description:{
            festivaldate:req.body.description.festivaldate,
            festivaldescr: req.body.description.festivaldescr
        }
    });
    festival.save().
    then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({message:err});
    })
})
// get display all etails
router.get('/', async(req,res) =>{ 
    try{ 
        const festivals = await festival.find(); 
        res.json(festivals); 
    }catch(err){ 
        res.json({message:err}); 
    } 
});
// getting a post by id
router.get('/:festivalid', async(req,res) =>{ 
    try{ 
        const festival = await Festival.findById(req.params.festivalid); 
        res.json(festival); 
    }catch(err){ 
        res.json({message:err}); 
    } 
});
// deleting a row 
router.delete('/:festivalid', async(req,res) =>{ 
    try{ 
        const festival = await Festival.findByIdAndDelete({_id: req.params.festivalid});
        res.json(festival); 
        }catch(err){
             res.json({message:err}); 
            }
         } ); 
//  updating the details
router.patch('/:festivalid', async(req,res) =>{ 
    try{ 
        const festival = await Festival.findOne({_id: req.params.festivalid}); 
        // if(req.body.name){
        //     if(req.body.name.firstname){
        //         customer.name.firstname= req.body.name.firstname;
        //     }
        //     if(req.body.name.lastname){
        //         customer.name.lastname= req.body.name.lastname;
        //     }
        // }
        // if(req.body.loction){
        //     if(req.body.loction.nameoflocation){
        //         customer.loction.nameoflocation=req.body.loction.nameoflocation;
        //     }
        //     if(req.body.loction.zipcode){
        //         customer.loction.zipcode = req.body.loction.zipcode;
        //     }
        //     if(req.body.loction.cityname){
        //         customer.loction.cityname= req.body.loction.cityname;
        //     }
        //     if(req.body.loction.statename){
        //         customer.loction.statename=req.body.loction.statename;
        //     }
        // }
        // if(req.body.email_id){
        //     customer.email_id=req.body.email_id;
        // }

        await customer.save();
        res.json(customer);
       }catch(err){ 
           res.json({message:err}); 
       } });
module.exports= router;