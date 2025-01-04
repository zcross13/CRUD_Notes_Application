const mongoose = required('mongoose')
const { Schema, model } = mongoose

const profileSchema = new Schema({
    //Basic User Information 
    date: { type: Date, default: Date.now },
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullName: {
        first: { type: String, required: true },
        last: { type: String, required: true },
    },
    // Task-related Information
    roles: { type: String },
    priorityPreferences: { type: [String], default: [] },
    themePreferences: { type: String },
    // Activity Tracking
    tasksCreated: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    tasksAssigned: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    completedTaskCount: { type: Number, default: 0 },
    //social/collaboration
    teams: { type: String },

})