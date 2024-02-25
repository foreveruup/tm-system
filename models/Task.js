require('dotenv').config();
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: String,
        enum: ['ToDo', 'InProgress', 'Done'],
        default: 'ToDo'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }] // Связь с метками
});

module.exports = mongoose.model('Task', taskSchema);
