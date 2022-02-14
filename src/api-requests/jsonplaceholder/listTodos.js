const axios = require("axios").default

const listTodos = async () => axios.get(
    "https://jsonplaceholder.typicode.com/todos",
)

module.exports = listTodos
