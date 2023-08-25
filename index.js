import express from "express";      
const app = express();              
const port = 3000;                 

app.get("/", (req, res) => {        
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "Ayala Clara Silva Miranda",      
  });
});

app.listen(port, () => {            
  console.log(`Serviço escutando na porta:  ${port}`);
});