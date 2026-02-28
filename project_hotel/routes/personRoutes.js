const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// POST route to add a person(data from frontend)
router.post('/', async (req, res)=>{

    try{
         const data=req.body //Let consider this request from frontend contains person data

    // Creating a new person document using the Mongoose model
    const newPerson=new Person(data);

    // Save the new person to the database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);



    }

    

    catch(err){
        console.error('save error:', err);
        // send back error details to help debugging (don't do this in production)
        res.status(500).json({error: err.message || 'Internal Server Error', details: err});
    }

})


//GET route to get the data of person from database
router.get('/', async (req, res) =>{
    try{
        const data =await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})



//specific work type data show only
router.get('/:workType', async(req, res)=>{
    try{
        const workType = req.params.workType; // if user url is hotel/person/cheif - so only chief data will be shown not others 
        if(workType =='chef' || workType == 'manager' || workType == 'waiter'){

            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }

    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // will extract the document id from url
        const updatedPersonData = req.body; // updated data from person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // return the updated document
            runValidators: true, // run mongoose validation on input data
        });
        console.log('data updated');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // extract id from URL

        const response = await Person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('data deleted');
        res.status(200).json({ message: 'Person deleted successfully' });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;