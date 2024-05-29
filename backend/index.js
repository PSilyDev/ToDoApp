// EXPRESS APP

// IMPORTS
const express = require('express');
const {createValidation, updateValidation} = require('./types.js');



// Step 1 - create an object of express app
const app = express();

// step 2 - add body parser middleware
app.use(express.json());

// step 3 - define routes
app.post('/todo', (req, res) => {

    // get data from req
    const toDo = req.body;

    // validate using zod
    const parsedToDo = createValidation.safeParse(toDo);
    if(!parsedToDo.success){
        res.status(411).json({
            msg: "You sent the wrong inputs!";
        })
        return;
    }
})

app.get('/todos', (req, res) => {
    
    
})


app.put('/completed', (req, res) => {
    
    // get data from req
    const toDoId = req.body;

    // validate using zod
    const parsedToDoId = updateValidation.safeParse(toDoId);
    if(!parsedToDoId.success){
        res.status(411).json({
            msg: "You sent the wrong inputs."
        })
        return;
    }
})


// step 4 - add error handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke');
})

// step 5 - add listener to the express app
app.listen(4000, () => {
    console.log('Server running on port 4000!');
})