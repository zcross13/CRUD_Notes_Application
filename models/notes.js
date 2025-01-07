const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Schema for Notes
// Notes represent the individual items or tasks in the application
const noteSchema = new Schema({
    // Title of the note
    title: {
        type: String,
        required: true,  // Ensure every note has a title
        maxlength: 200,  // Maximum length of the title (200 characters)
        trim: true,      // Remove any leading/trailing whitespace
    },
    // Content of the note
    content: {
        type: String,
        required: true,  // Content is mandatory for the note
        trim: true,      // Remove any leading/trailing whitespace
    },
    // User who created the note
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',  // References the User model
        required: true,  // Every note must belong to a user
    },
    // Flag indicating whether the note is important
    isImportant: {
        type: Boolean,
        default: false,  // Default value is false, unless specified otherwise
    },
    // Labels related to this note
    labels: [{
        type: Schema.Types.ObjectId,
        ref: 'Label',  // References the Label model
        required: false,  // Labels are optional
    }]
}, { timestamps: true });  // Automatically create createdAt and updatedAt fields

// Export the Note model
module.exports = model('Note', noteSchema);
