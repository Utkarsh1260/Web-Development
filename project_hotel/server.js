// require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); //this is only for your local use when deploying your project online comment it always


const express = require('express')
const app = express();
const db = require('./db'); // connecting with mongodb server file
require('dotenv').config();
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Person=require('./models/person') // for authentication process

const bodyParser = require('body-parser'); // parse incoming JSON
app.use(bodyParser.json());
const PORT=process.env.PORT || 3000

//middleware function
const logRequest =(req, res, next) =>{
    console.log(`${new Date().toLocaleString()} Request Made to: ${req.originalUrl}`);
    next();
}


app.use(logRequest);


passport.use(new LocalStrategy(async (USERNAME, password, done) =>{
    //authentication logic 
    try{
        console.log('Recieved credentials:', USERNAME, password);
        const user = await Person.findOne({username: USERNAME});
        if(!user)
            return done(null, false, {message: 'Incorrect username.'});
        const isPasswordMatch= user.password === password ? true : false;
        if(isPasswordMatch){
            return done(null, user);
        }
        else{
            return done(null, false, {message: 'Incorrect password.'});
        }

    }

    catch(err){
        return done(err);

    }
}))

app.use(passport.initialize());

const localAuthMiddleware=passport.authenticate('local', {session:false})

app.get('/', localAuthMiddleware, function(req, res){
    res.send("Take the blue juice");
})

// models used in this server
const person = require('./models/person');
const menuItem = require('./models/menuItem');




app.get('/', function (req, res) {
    res.send('Welcome sir to Supreme hotel... World famous dishes are avaliable here. What would you like to eat')
})






// Importing the router files of person
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routes
app.use('/person', localAuthMiddleware, personRoutes);
app.use('/menu', localAuthMiddleware, menuItemRoutes);

// menu routes defined in this file

// POST add menu item
app.post('/menu', async (req, res) => {
    try {
        const menus = req.body;
        const newMenu = new menuItem(menus);
        const response = await newMenu.save();
        console.log('menu saved');
        res.status(200).json(response);
    } catch (err) {
        console.error('menu save error:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error', details: err });
    }
});

// GET all menu items
app.get('/menu', async (req, res) => {
    try {
        const menus = await menuItem.find();
        console.log('menu data fetched');
        res.status(200).json(menus);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


