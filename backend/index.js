// EXPRESS APP

// IMPORTS
const express = require('express');
const { authValidation, createValidation, updateValidation } = require('./types.js');
const { hashPassword } = require('./middlewares/hashPassword.js')
const { user,toDo } = require('./db.js');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv');
const mongoose = require('mongoose');



// Step 1 - create an object of express app
const app = express();

// step 2 - add body parser middleware
app.use(express.json());

app.use(cors());

// step 3 - define routes

app.post('/signup', hashPassword, async(req, res) => {

    
    // get data from req
    const singupPayload = {
        username: req.body.username,
        password: res.locals.hashedPassword
    }
    // validate using zod
    const parsedUser = authValidation.safeParse(singupPayload);
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

app.post('/signin', async(req, res) => {

    // get data from req
    const signinPayload = req.body;

    // validate using zod
    const parsedUser = authValidation.safeParse(signinPayload);
    
    if(!parsedUser.success){
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
        return;
    }

    // authenticate credentials
    isPresent = await user.findOne({username: signinPayload.username});
    // console.log(isPresent);
    if(isPresent != null){
        // check for password
        isAuthenticated = await bcrypt.compare(signinPayload.password, isPresent.password);
        if(isAuthenticated === true){
            // signin successfull

            // create jsonwebtokens
            const signedToken = jwt.sign({username: signinPayload.username}, process.env.SECRET_KEY);

            
            // send back the response
            res.status(200).json({
                msg: "Signed in successfull",
                userInfo: {
                    username: isPresent.username, 
                    userId: isPresent._id,
                    token: signedToken
                }
            })
        }
        else{
            res.status(401).json({
                msg: "Invalid password!"
            })
        }
    }
    else{
        res.status(401).json({
            msg: "Invalid username!"
        })
    }

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
        userId: createPayload.userId,
        title: createPayload.title,
        description: createPayload.description,
        date: createPayload.date,
        priority: createPayload.priority,
        completed: false,
        inprogress: false
    }) //Note - since we have added await, the pointer will not move to next line, if this code throws error it will be catched by global error handler and 'TODO created' will not be sent.

    // send back the res
    res.status(201).json({
        msg: "ToDo created."
    })
})

// get all the todos
app.post('/todos', async(req, res) => {

    // get the userId from the req
    const getPayload = req.body;
    
    // get data from db
    const todos = await toDo.find({userId: getPayload.userId});
    // const todos = await toDo.find({userId: getPayload.userId});

    console.log(todos);
    // send back the res
    res.json({
        msg: "All stored todos",
        payload: todos
    })
    
})


app.put('/completed', async (req, res) => {
    
    // get data from req
    const updatePayload = req.body;
    // console.log(updatePayload);
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
        inprogress: false,
        completed: true
    })

    // send back the res
    res.status(200).json({
        msg: "Todo marked as completed."
    })
})

app.put('/inprogress', async(req, res) => {

    const updatePayload = req.body;
    // console.log('updatePayload - ', updatePayload);

    // fetch the current document
    const toDoItem = await toDo.findOne({_id: updatePayload.id});
    if(!toDoItem){
        res.status(411).json({
            msg: "You sent the wrong id."
        })
        return;
    }

    // change the inprogress
    const newInprogressValue = !toDoItem.inprogress;

    // get data from req body
    // console.log(updatePayload);
    // validate using zod
    const parsedToDoId = updateValidation.safeParse(updatePayload);
    if(!parsedToDoId.success){
        res.status(411).json({
            msg: "You sent the wrong inputs."
        })
        return;
    }

    // update the data in db
    const response = await toDo.updateOne({_id: updatePayload.id}, {
        inprogress: newInprogressValue
    })
    // console.log('res: ', response);
    // send back the res
    res.status(200).json({
        msg: "Todo marked as completed."
    })
})

app.post('/delete', async(req, res) => {

    // get the data from the req
    const deletePayload = req.body;

    // delete the document
    const deletedCount = await toDo.deleteOne({ _id: deletePayload.id })

    // send back the res
    if(deletedCount.acknowledged === true){
        res.status(200).json({
            msg: "Todo deleted successfully."
        })
    }
    else{
        res.status(501).json({
            msg: "Todo can not be deleted."
        })
    }
})


// step 4 - add error handling middleware
app.use((err, req, res, next) => {
    // console.log(err.stack);
    res.status(500).send('Something broke');
})

// step 5 - add listener to the express app
app.listen(4000, () => {
    console.log('Server running on port 4000!');
})