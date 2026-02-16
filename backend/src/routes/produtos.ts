import { Router } from "express";

const router = Router();


router.get("/", async (req, res) => {
  
  try {
    const url = process.env.SERVER_URL;
    if (!url) {
      return res.status(500).json({ error: "SERVER_URL não configurado" });
    }
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

// Produto por ID
router.get("/:id", async (req, res) => {
  try {
    const url = process.env.SERVER_URL;
    if (!url) {
      return res.status(500).json({ error: "SERVER_URL não configurado" });
    }
    const { id } = req.params;
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
});

export default router;

