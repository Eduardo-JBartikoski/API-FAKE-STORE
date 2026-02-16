import Express from "express";
import dotenv from "dotenv"; 
import produtosRouter from "./routes/produtos.js"
import ping from './routes/ping.js'

dotenv.config();


const app = Express();
const PORT = process.env.PORT || 3000;
const SERVER_URL=process.env.SERVER_URL;

app.get("/", (req, res) => {
    res.send("Hello World!!!!");
});

app.use("/produtos", produtosRouter);

app.use("/ping", ping);


app.listen(PORT, () => {
    console.log("Bem vindo ao meu servidor!");
    console.log(`http://localhost:${PORT}`);
    console.log("SERVER_URL:", process.env.SERVER_URL);
    console.log(SERVER_URL);
});