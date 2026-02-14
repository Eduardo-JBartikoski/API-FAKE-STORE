import Express = require("express");
import dotenv = require("dotenv");

const app = Express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const serverUrl = process.env.SERVER_URL;

app.get("/", (req, res) => {
    res.send("Hello World!!!!");
});

app.get("/produtos", async (req, res) => {
    try{
        if(!serverUrl) {
            res.status(500).json({ error: "server não configurado" });
            return;
        } 
        const response = await fetch(serverUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar os produtos" });
}});

app.listen(PORT, () => {
    console.log("Bem vindo ao meu servidor!");
    console.log(`http://localhost:${PORT}`);
});