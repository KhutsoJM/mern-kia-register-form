import mongoose from 'mongoose'
const Schema = mongoose.Schema

const learnerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true,
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

module.exports = mongoose.model('Learner', learnerSchema)