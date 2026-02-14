import { Router } from "express";

const router = Router();
const serverUrl = process.env.SERVER_URL; 

router.get("/", async (req, res) => {
  try {
    if (!serverUrl) {
      return res.status(500).json({ error: "SERVER_URL não configurado" });
    }

    const response = await fetch(serverUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

export default router;
