// import mongoose library 
const mongoose = require('mongoose')

// destructures the schema and model out from the mongoose library 
//schema tell the database what fields are required 
//model tell  the database how  to struture it 
const { Schema, model } = mongoose

// sets up schema 
const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 200,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
    },
    startDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed", "Delayed"]
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    }
}, { timestamps: true })

// export model 
module.exports = model('Project', projectSchema)