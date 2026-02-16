import { Router } from "express";


const router = Router(); 


router.get("/", async (req, res) => {
  try {
    const url = process.env.SERVER_URL;
    if (!url) {
      console.log("SERVER_URL:", url);
      return res.status(500).json({ error: "SERVER_URL não configurado" });
      
    }

    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

export default router;
