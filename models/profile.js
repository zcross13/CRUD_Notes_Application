const mongoose = required('mongoose')
const { Schema, model } = mongoose

const profileSchema = new Schema({
    //Basic User Information 
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: {
        first: { type: String, required: true },
        last: { type: String, required: true },
    },
    // Task-related Information
    roles: { type: String, enum: ["Admin", "User", "Manager"], default: "User" },
    priorityPreferences: [{ type: String }],
    themePreferences: { type: String, default: "light" },
    // Activity Tracking
    tasksCreated: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    tasksAssigned: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    completedTaskCount: { type: Number, default: 0 },
    //social/collaboration
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
    followers: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
    profilePicture: { type: String },
    bio: { type: String },
    notificationPreferences: {
        email: { type: Boolean, default: true },
        sms: { type: Boolean, default: false },
        push: { type: Boolean, default: true }
    },
    accountCreatedDate: [{ type: Date, default: Date.now }],
    lastLoginDate: { type: Date },
    status: { type: String, default: "active", enum: ["active", "suspended", "deactivated"] },
})

module.exports = mongoose.exports('Profile', profileSchema)
