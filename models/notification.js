const mongoose = require('mongoose')
const { Schema, model } = mongoose

const notificationSchema = new Schema({
    notification: {
        type: String,
        enum: ['task_update', 'team_invite', 'comment', 'system_alert'],
        required: true,
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    relatedEntity: {
        type: Schema.Types.ObjectId,
        refPath: 'targetModel'
    },
    targetModel: {
        type: String,
        required: true,
        enum: ['Task', 'Note', 'Team']
    },
    readStatus: {
        type: Boolean
    },
}, { timestamps: true })

module.exports = model('Notification', notificationSchema)