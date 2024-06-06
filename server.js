const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const dataFile = "data.json";

function readData() {
    return JSON.parse(fs.readFileSync(dataFile, "utf8"));
}

function writeData(data) {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), "utf8");
}

app.post("/api/cadastro", (req, res) => {
    const data = readData();
    data.funcionarios.push(req.body);
    writeData(data);
    res.send("Funcionário cadastrado com sucesso!");
});

app.post("/api/consulta", (req, res) => {
    const data = readData();
    const result = data.funcionarios.filter(f => f.nome.includes(req.body.nome) || f.cpf === req.body.cpf);
    res.json(result);
});

app.post("/api/ponto", (req, res) => {
    const data = readData();
    const ponto = {
        cpf: req.body.cpf,
        data: new Date().toISOString()
    };
    data.pontos.push(ponto);
    writeData(data);
    res.send("Ponto registrado com sucesso!");
});

app.post("/api/ferias", (req, res) => {
    const data = readData();
    const ferias = {
        cpf: req.body.cpf,
        dataInicio: req.body.dataInicio,
        dataFim: req.body.dataFim
    };
    data.ferias.push(ferias);
    writeData(data);
    res.send("Férias registradas com sucesso!");
});

app.post("/api/avaliacao", (req, res) => {
    const data = readData();
    const avaliacao = {
        cpf: req.body.cpf,
        feedback: req.body.feedback
    };
    data.avaliacoes.push(avaliacao);
    writeData(data);
    res.send("Avaliação enviada com sucesso!");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
