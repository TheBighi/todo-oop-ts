import type { Request, Response, NextFunction } from 'express';
declare class todoController {
    createTodo: (req: Request, res: Response, next: NextFunction) => void;
    getTodos: (req: Request, res: Response, next: NextFunction) => void;
    updateTodo: (req: Request, res: Response, next: NextFunction) => void;
    deleteTodo(req: Request, res: Response, next: NextFunction): void;
}
export declare const TodoController: todoController;
export {};
