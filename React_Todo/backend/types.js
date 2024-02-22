// here enter your zod validations
// enter the inputs u expect from end user

const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
})

const updateTodo = zod.object({
    id:zod.string(),
})


module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo,
}

