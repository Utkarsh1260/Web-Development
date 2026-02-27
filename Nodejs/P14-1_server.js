const express = require('express')
const app = express();
const db = require('./P14_db'); // connecting with mongodb server file

const bodyParser = require('body-parser'); // parse incoming JSON
app.use(bodyParser.json());

// require the model from the correct relative path
const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');

app.get('/', function (req, res) {
    res.send('Welcome sir to Supreme hotel... World famous dishes are avaliable here. What would you like to eat')
})


// POST route to add a person(data from frontend)
app.post('/person', async (req, res)=>{

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


// POST route to add a menu(data from frontend) - start
app.post('/menu', async (req, res)=>{

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




//GET method to get the data of person from database
app.get('/person', async (req, res) =>{
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



//GET method to get the data of menu from database - start
app.get('/menu', async (req, res) =>{
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


app.listen(3000, () => {
    console.log('listening on port 3000');
})



