import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import todoRoutes from "./routes/todos"

const app = express()

app.use("/todos", todoRoutes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({ error: error.message})
})

app.listen(3001, () => {
    console.log("listening on http://localhost:3001")
})