const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // Get access to the whole User files so we can find the true owner with ID
    },
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task