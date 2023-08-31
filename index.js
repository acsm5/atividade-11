//index.js
import dotenv from "dotenv";
import express from "express";
import { selectUsuarios, selectUsuario } from "./bd.js";
dotenv.config();

const app = express(); 
const port = 3000; 

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  
  res.json({
    nome: "Ayala Clara Silva Miranda",
  });
});
app.get("/usuario/:id", async (req, res) => {
  console.log("Rota GET /usuario solicitada");
  try {
    const usuario = await selectUsuario(req.params.id);
    if (usuario.length > 0) res.json(usuario);
    else res.status(404).json({ message: "Usuário não encontrado!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

  console.log("Rota GET/usuarios solicitada");
});

app.listen(port, () => {
  
  console.log(`Serviço escutando na porta:  ${port}`);
});


