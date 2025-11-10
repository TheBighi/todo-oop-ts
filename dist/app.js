import express from 'express';
import todoRoutes from "./routes/todos";
var app = express();
app.use("/todos", todoRoutes);
app.use(function (error, req, res, next) {
    res.json({ error: error.message });
});
app.listen(3001, function () {
    console.log("listening on http://localhost:3001");
});
//# sourceMappingURL=app.js.map