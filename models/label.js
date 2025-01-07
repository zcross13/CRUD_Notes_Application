const mongoose = require('mongoose')
const { Schema, model } = mongoose


// Schema for Labels
// Labels help categorize and organize tasks
const labelSchema = new Schema({
    // Name of the label
    name: {
        type: String,
        required: true, // Ensure every label has a name
        trim: true // Remove leading/trailing whitespace
    },
    // Color of the label (e.g., for UI representation)
    color: {
        type: String,
        default: '#000000',
        match: /^#([0-9A-F]{3}|[0-9A-F]{6})$/i // Validate hex color format
    }, // Default to black if no color is provided
    relatedTasks: [{
        // Related tasks associated with this label
        type: Schema.Types.ObjectId,
        ref: "Task", // References the Task model
        required: false,
    }]
}, { timestamps: true })

// Export the Label model
module.exports = model('Label', labelSchema)