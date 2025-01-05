// import mongoose library 
const mongoose = require('mongoose')

// Destructure the Schema and model functions from mongoose
const { Schema, model } = mongoose

// Define schema for storing comments
// This schema allows users to comment on Tasks or Notes in the app 
const commentSchema = new Schema({
    // Text content of the comment
    text: {
        type: String,
        required: true // Ensures comments are not empty
    },
    // Reference to the user who authored the comment
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // Reference to the task or note the comment is related to
    relatedTo: {
        type: Schema.Types.ObjectId,// Links to a Task or Note document
        refPath: "targetModel", // Dynamically refers to the appropriate model
        required: true, // Ensures the comment is tied to a target
    },
    // Specifies the type of the target (Task or Note)
    targetModel: {
        type: String, // Defines which model the relatedTo field references
        require: true,
        enum: ['Task', 'Note'],  // Restricts values to Task or Note
    }
},
    // Automatically adds createdAt and updatedAt timestamps
    { timestamps: true })

// exports comment model
module.exports = model('Comment', commentSchema)