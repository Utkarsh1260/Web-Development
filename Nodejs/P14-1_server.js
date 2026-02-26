const express = require('express')
const app = express();
const db = require('./P14_db');

const Person=require('/models/Person');

app.get('/', function (req, res) {
    res.send('Welcome sir to Supreme hotel... World famous dishes are avaliable here. What would you like to eat')
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})



