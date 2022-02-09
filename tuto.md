[<-- Readme](Readme.md)

Axios tests requires less refactoring than selenium tests, because the logic is less complex and the number of code lines is lower.

In this step of the onboarding tutorial, we'll focus on creating api requests source files and reusable methods for our test project.

The goal of this is that any of our api request will be reusable and configurable in any of our future tests, making their implementation and maintenance easier.

1. Copy everything (except node_modules and markdown files) from [04_javascript_axios_jest_one_file](04_javascript_axios_jest_one_file)

2. Create source files and architecture to implement an api requests library for jsonplaceholder fake application

    ```bash
    mkdir src &&
    mkdir src/api-requests &&
    mkdir api/requests/jsonplaceholder &&
    touch src/api-requests/jsonplaceholder/createNewTodo.js &&
    touch src/api-requests/jsonplaceholder/getTodoById.js &&
    touch src/api-requests/jsonplaceholder/listTodos.js &&
    ```

3. In each of the new files, move a part of the test code to make it more readable, shareable and future-proof

3. (BONUS) Add JSDoc DOCStrings as comments and describe the expected parameters fo each function, this will enable a better autocompletion when importing and using a function.

4. Take a look at the final code if you need some help.

5. The test should still run and PASS.