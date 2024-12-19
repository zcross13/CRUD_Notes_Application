const express = require('express')
const router = express.Router()
const Note = require('../models/notes')

// Homepage - Get All Notes
router.get('/', async (req, res) => {
    try {
        const note = await Note.find()
        res.status(200).json(note)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get a Note 
router.get('/:id', getNote, (req, res) => {
    res.send(res.note)
})

// Create a Note
router.post('/', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        content: req.body.content
    })
    try {
        const newNote = await note.save()
        res.status(201).json(newNote)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Edit Note
router.patch('/:id', getNote, async (req, res) => {
    // Check if title is being updated
    if (req.body.title != null) {
        res.note.title = req.body.title;  // Update note title
    }

    // Check if content is being updated
    if (req.body.content != null) {
        res.note.content = req.body.content;  // Update note content
    }

    try {
        // Save the updated note to the database
        const updatedNote = await res.note.save();

        // Send response indicating successful update
        res.send({ message: "Note updated", updatedNote });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
});
// Delete Note

// Get a note middleware 

async function getNote(req, res, next) {
    let note
    try {
        note = await Note.findById(req.params.id)

        if (!note) {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        return res.status(500).json({ message: "An error occurred while retrieving the user" })
    }

    res.note = note

    next()
}

module.exports = router