const Note = require('../models/notes')

// Get all notes 
const getAllNote = async (req, res) => {
    res.send(res.note)
}

// Get a single note by ID
const createNote = async (req, res) => {
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
}


// Update a note by ID
const updateNote = async (req, res) => {
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


// Delete a note by ID
const deleteNote = async (req, res) => {
    try {
        await res.note.deleteOne()
        res.json({ message: 'Delete user' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}



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

module.exports = {
    getAllNote,
    getNote,
    createNote,
    updateNote,
    deleteNote,
}