const express = require('express')
const cors = require('cors');

const routesFazenda = require('./api/routes/fazendaRoutes')
const routesPessoa = require('./api/routes/pessoaRoutes')
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
const pessoaS = require('./services/pessoaService')
const carteiraS = require('./services/carteiraVacServices')
const registraS = require('./services/registraServices')
const reproS = require('./services/reproducaoServices')
const racaS = require('./services/racasServices')

const app = express()
const port = 3001

app.use(cors());
app.use('/static', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));
    next();
});

app.use(routesFazenda)
app.use(routesPessoa)
app.use(routesDose)
app.use(routesBovino)
app.use(routesIngrediente)
app.use(routesVacina)

app.listen(port, () => {
    console.log('Servidor rodando na porta ', port)
})
