const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    numOfKids: {
        type: Number,
        required: true
    },
    learnerName: {
        type: String,
        required: true
    },
    learnerSurname: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)