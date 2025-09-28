const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 10000;

// Rota principal
app.get("/", (req, res) => {
  res.send("Servidor online ✅");
});

// Rota de histórico da Blaze
app.get("/historico", async (req, res) => {
  try {
    const response = await axios.get("https://api-v2.blaze.com/roulette_games/recent");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
