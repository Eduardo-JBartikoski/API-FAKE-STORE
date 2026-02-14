import Express from "express";
import dotenv from "dotenv";
import produtosRouter from './routes/produtos'


const app = Express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const serverUrl = process.env.SERVER_URL;

app.get("/", (req, res) => {
    res.send("Hello World!!!!");
});

app.use("/products", produtosRouter);



app.listen(PORT, () => {
    console.log("Bem vindo ao meu servidor!");
    console.log(`http://localhost:${PORT}`);
});