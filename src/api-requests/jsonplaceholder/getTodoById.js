const axios = require("axios").default

const getTodoById = (todoId) => axios.get("https://jsonplaceholder.typicode.com/todos/" + todoId)

module.exports = getTodoById
