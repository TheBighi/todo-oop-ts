import { Todo } from '../models/todo.js';
const todos = [];
class todoController {
    createTodo = (req, res, next) => {
        try {
            const task = req.body.task;
            const newTodo = new Todo(Math.random().toString(), task);
            todos.push(newTodo);
            res.status(201).json({
                message: 'created new task',
                createdTask: task
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    getTodos = (req, res, next) => {
        try {
            res.status(201).json({
                tasks: todos
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    updateTodo = (req, res, next) => {
        try {
            const todoId = req.params.id;
            const updatedTask = req.body.task;
            const todoIndex = todos.findIndex(todo => todo.id === todoId);
            if (todoIndex < 0) {
                throw new Error('could not find todo bassed on id');
            }
            todos[todoIndex] = new Todo(todos[todoIndex].id, updatedTask);
            res.status(201).json({
                message: 'Todo updated',
                Todo: updatedTask
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    deleteTodo(req, res, next) {
        try {
            const todoId = req.params.id;
            const todoIndex = todos.findIndex(todo => todo.id === todoId);
            if (todoIndex < 0) {
                throw new Error('could not find todo bassed on id');
            }
            todos.splice(todoIndex, 1);
            res.status(201).json({
                message: "Todo deleted"
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
export const TodoController = new todoController();
//# sourceMappingURL=todos.js.map