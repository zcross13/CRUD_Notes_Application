require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection;

// listen for error when connecting to database  
db.on('error', (error) => {
    console.error('Database connection error:', error);
});

// listen once to see if database is connected 
db.once('open', () => {
    console.log('Database  connected successfully')
})

app.use(express.json())

const userRouter = require('./routes/users')
const profileRouter = require('./routes/profile')
const taskRouter = require('./routes/task')
const notesRouter = require('./routes/notes')
const teamRouter = require('./routes/team')


app.use('/user', userRouter)
app.use('/profile', profileRouter)
app.use('/task', taskRouter)
app.use('/notes', notesRouter)
app.use('/team', teamRouter)


app.listen(3000, () => {
    console.log('Server Connected')
})