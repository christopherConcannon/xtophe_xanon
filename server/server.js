const path = require('path');
const express = require('express')
const cors = require('cors')
require('dotenv').config({path: '../.env'})
const mailerRoute = require('./routes/mailerRoute')

const PORT = process.env.PORT || 3001;

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', mailerRoute)

// serve up static assets and client index only in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))

  // serve index.html for any unknown paths when running the built client
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })
} else {
  // development helper route
  app.get('/', (req, res) => {
    res.json({ status: 'server running', env: process.env.NODE_ENV || 'development' })
  })
}

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
