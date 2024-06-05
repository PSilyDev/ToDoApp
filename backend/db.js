// MONGOOSE

// IMPORTS
const mongoose = require('mongoose');
require('dotenv').config()

// step 1 - connect to mongodb
mongoose.connect('mongodb+srv://PSilyDev:%40Yashsri01@100xdev.crsftik.mongodb.net/');

// step 2 - define schemas

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})

const ToDoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

// // step 3 - create model for schemas
const User = mongoose.model('User', UserSchema);
const ToDo = mongoose.model('ToDo', ToDoSchema);

// step 4 - export models
module.exports = {
    toDo: ToDo,
    user: User
}