const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem');


// POST route to add a menu(data from frontend) - start
router.post('/', async (req, res)=>{

    try{
         const menus=req.body //Let consider this request from frontend contains person data

    // Creating a new menu document using the Mongoose model
    const newMenu=new MenuItem(menus);

    // Save the new menu to the database
    const response = await newMenu.save();
    console.log('menu saved');
    res.status(200).json(response);
    }

   catch(err){
        console.error('save error:', err);
        // send back error details to help debugging (don't do this in production)
        res.status(500).json({error: err.message || 'Internal Server Error', details: err});
    }

})
// POST route to add a menu(data from frontend) - end



//GET method to get the data of menu from database - start
router.get('/', async (req, res) =>{
    try{
        const menus =await MenuItem.find();
        console.log('menu data fetched');
        res.status(200).json(menus);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
//GET method to get the data of menu from database - end



module.exports=(router);