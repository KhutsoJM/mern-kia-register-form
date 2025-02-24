const mongoose = require('mongoose')
const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
    console.log(req.path, req.method)
    res.json({msg: "Hello there!"})
    next()
})


app.get('/register', (req, res) => {
    res.json({msg: "registering the user"})
})

app.listen(4000, () => {
    console.log("Listening on port 4000")
})