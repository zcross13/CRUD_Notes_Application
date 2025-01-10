const mongoose = require('mongoose')
const { Schema, model } = mongoose

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    description: {
        type: String,
        maxLength: 200
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    },
    dueDate: {
        type: Date,
        required: true
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    subtasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Subtask'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Notes'
    }]

}, { timestamps: true })

module.exports = model('Task', taskSchema)