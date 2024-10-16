import express from "express";
import vagasRouter from "./routes/vagasRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(vagasRouter);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
