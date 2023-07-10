const express = require('express')

const routesFazenda = require('./api/routes/fazendaRoutes')
const routesDose = require('./api/routes/doseRoutes')
const routesBovino = require('./api/routes/bovinoRoutes')
const routesIngrediente = require('./api/routes/ingredienteRoutes')
const routesVacina = require('./api/routes/vacinaRoutes')

const fazendaS = require('./services/fazendaService')
const bovinoS = require('./services/bovinoService')
const vacaS = require('./services/vacaService')
const dosesS = require('./services/doseService')
const ingredienteS = require('./services/ingredienteService')
const vacinaS = require('./services/vacinaServices')

const app = express()
const port = 3001

//Exemplo de Adição da Fazenda
let fazendaTemp = { nome: "tristeza", sitio: "rivotril", cidade: "dipirona", cep: "369-25", complemento: "Uma remedio", numero: 4 }
//fazendaS.addFazenda(fazendaTemp)

//Exemplo de Adição de Bovino
let bovinoTemp = { Fazenda_idFazenda: 1, Vaca_idVaca: null, reprodutor: false, sexo: "Fem", data_nascimento: "2001-12-03", chifre: false, nome: "Mimosa", peso: 251.6, cor: "Pintada" }
//bovinoS.addBovino(bovinoTemp)

//Exemplo de Adição de Vaca
let vacaTemp = { dar_leite: true, gravida: false, producao_leite: 3 }
//vacaS.addVaca(vacaTemp)

//exemplo adição de vacina
let vacinaTemp = { nome_vacina: "ESF-12/51", info: "Vacina para gripe", fabricante: "Instituto Raissa Feia" }
//vacinaS.addVacina(vacinaTemp)
/*
bovinoS.getBovinoFromFazenda(2)
  .then((bovino) => {
    console.log(bovino);
  })
  .catch((error) => {
    console.error("Erro ao buscar o objeto fazenda:", error);
  });
*/
vacinaS.getVacinaNome("ESF-12/51")
  .then((vacina) => {
    console.log(vacina);
  })
  .catch((error) => {
    console.error("Erro ao buscar o objeto fazenda:", error);
  });
app.use('/static', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(routesFazenda)
app.use(routesDose)
app.use(routesBovino)
app.use(routesIngrediente)
app.use(routesVacina)

app.listen(port, () => {
    console.log('Servidor rodando na porta ', port)
})
