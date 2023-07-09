const express = require('express')

const routesFazenda = require('./api/routes/fazendaRoutes')

const fazendaS = require('./services/fazendaService')
const bovinoS = require('./services/bovinoService')
const vacaS = require('./services/vacaService')

const app = express()
const port = 3001

//Exemplo de Adição da Fazenda
let fazendaTemp = { nome: "Feliz", sitio: "Pica-Pau", cidade: "Montana", cep: "555-42", complemento: "Uma Casa", numero: 50 }
fazendaS.addFazenda(fazendaTemp)

//Exemplo de Adição de Bovino
let bovinoTemp = { Fazenda_idFazenda: 2, Vaca_idVaca: null, reprodutor: false, sexo: "Fem", data_nascimento: "2001-12-03", chifre: false, nome: "Mimosa", peso: 251.6, cor: "Pintada" }
bovinoS.addBovino(bovinoTemp)

//Exemplo de Adição de Vaca
let vacaTemp = { idVaca: 1, dar_leite: true, gravida: false, producao_leite: 3 }
vacaS.addVaca(vacaTemp)

app.use('/static', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(routesFazenda)

app.listen(port, () => {
    console.log('Servidor rodando na porta ', port)
})