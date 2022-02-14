const axios = require("axios").default

/**
 *
 * @param {String} title
 * @param {String} body
 * @param {Int} userId
 * @return {Promise<void>}
 */
const createNewTodo = (title, body, userId) => {
    return axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
            title,
            body,
            userId,
        },
    )
}

module.exports = createNewTodo
