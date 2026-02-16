import express from "express";
import dotenv from "dotenv"; 
import cors from "cors";
import produtosRouter from "./routes/produtos.js";
import ping from "./routes/ping.js";

dotenv.config(); // carrega variáveis do .env

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const SERVER_URL = process.env.SERVER_URL;

app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

app.use("/produtos", produtosRouter);
app.use("/ping", ping);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("SERVER_URL:", SERVER_URL);
});
