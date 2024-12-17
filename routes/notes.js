const express = require('express')
const router = express.Router()
const Note = require('../models/notes')

// Homepage - Get All Notes

// Get a Note 

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

// Delete Note

// Get a note middleware 


module.exports = router