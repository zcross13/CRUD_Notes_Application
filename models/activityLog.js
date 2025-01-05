const mongoose = require('mongoose')
const { Schema, model } = mongoose

const activityLogSchema = new Schema({
    action: {
        type: String,
        required: true,
        enum: ['created', 'updated', 'deleted', 'assigned', 'completed', 'commented', 'pending', 'resolved']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    target: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'targetModel'
    },
    targetModel: {
        type: String,
        required: true,
        enum: ['Task', 'Note', 'Team']
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})


module.exports = model('ActivityLog', activityLogSchema)