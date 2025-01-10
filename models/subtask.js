const mongoose = require('mongoose')
const { Schema, model } = mongoose

const subtaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        maxLength: 200,
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed', 'Delayed'],
        default: 'Pending'
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    },
    taskId: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: true,
    },
    dueDate: {
        type: Date
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

module.exports = model('SubTask', subtaskSchema)