const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! You Just created an get api <br> Sir, What would you like to eat')

})

app.get('/dosa', (req, res) => {
  res.send('Sure, I will serve you a dosa')

})

app.listen(3000)
