// EXPRESS APP

// IMPORTS
const express = require('express');
const { signupValidation, createValidation, updateValidation } = require('./types.js');
const { user,toDo } = require('./db.js');
const cors = require('cors');



// Step 1 - create an object of express app
const app = express();

// step 2 - add body parser middleware
app.use(express.json());

app.use(cors());

// step 3 - define routes

app.post('/signup', async(req, res) => {
    
    // get data from req
    const singupPayload = req.body;
    console.log(singupPayload);
    // validate using zod
    const parsedUser = signupValidation.safeParse(singupPayload);
    if(!parsedUser.success){
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
        return;
    }

    // store in db
    await user.create({
        username: singupPayload.username,
        password: singupPayload.password
    })

    // send back the res
    res.json({
        msg: "User created successfully."
    })
})
app.post('/todo', async (req, res) => {

    // get data from req
    const createPayload = req.body;
    // validate using zod
    const parsedToDo = createValidation.safeParse(createPayload);
    if(!parsedToDo.success){
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
        return;
    }

    // store in db
    await toDo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    }) //Note - since we have added await, the pointer will not move to next line, if this code throws error it will be catched by global error handler and 'TODO created' will not be sent.

    // send back the res
    res.json({
        msg: "ToDo created."
    })
})

app.get('/todos', async(req, res) => {
    
    // get data from db
    const todos = await toDo.find();

    // send back the res
    res.json({
        msg: "All stored todos",
        payload: todos
    })
    
})


app.put('/completed', async (req, res) => {
    
    // get data from req
    const updatePayload = req.body;
    console.log(updatePayload);
    // validate using zod
    const parsedToDoId = updateValidation.safeParse(updatePayload);
    if(!parsedToDoId.success){
        res.status(411).json({
            msg: "You sent the wrong inputs."
        })
        return;
    }

    // update the data in db
    await toDo.updateOne({_id: updatePayload.id}, {
        completed: true
    })

    // send back the res
    res.json({
        msg: "Todo marked as completed."
    })
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