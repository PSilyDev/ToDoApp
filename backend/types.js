// VALIDATION (ZOD)

// IMPORTS
const zod = require('zod');

// step 1 - define expected input types for all endpoints

    // for post (/todo)

const createToDo = zod.object({
    title: zod.string(),
    description: zod.string()
})

    // for put (/completed)

const updateToDo = zod.object({
    id: zod.string()
})

// step 2 - export the zod schema
module.exports = {
    createValidation: createToDo,
    updateValidation: updateToDo
}