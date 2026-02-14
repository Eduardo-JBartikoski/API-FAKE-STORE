import Express from "express";
import dotenv from "dotenv";
import produtosRouter from './routes/produtos.js'
import ping from './routes/ping.js'


const app = Express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!!!!");
});

app.use("/produtos", produtosRouter);

app.use("/ping", ping);


app.listen(PORT, () => {
    console.log("Bem vindo ao meu servidor!");
    console.log(`http://localhost:${PORT}`);
});