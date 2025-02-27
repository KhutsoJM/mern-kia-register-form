// Packages
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const User = require('./models/User')

// Express app
const app = express()

// Middleware
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use('/', (req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.post('/register', async (req, res) => {
    try {
        await User.create({ ...req.body })
    } catch (e) {
        console.log(e.message)
        return res.status(200).json({ error: e.error })
    }

    const user = res.json({ user: req.body })
})



app.listen(4000, () => {
    console.log(`Listening on port ${4000}`)
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('Connected to the database')
        })
        .catch((e) => {
            console.log(`Error: ${e.message}`)
        })
})

