const express = require('express')

const routesFazenda = require('./api/routes/fazendaRoutes')
const fazendaS = require('./services/fazendaService')

const app = express()
const port = 3001

//Exemplo de Adição da Fazenda
let fazendaTemp = { nome: "Teste", sitio: "Amarelo", cidade: "Montana", cep: "555-42", complemento: "Duas casas", numero: 58 }
fazendaS.addFazenda(fazendaTemp)

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