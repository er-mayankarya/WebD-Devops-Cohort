//Basics of Express - Structure & all 

const express = require('express')
const app = express()

app.get('/me', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)