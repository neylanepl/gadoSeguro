require("dotenv").config();
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

const app = express()
const port = 3001

app.use(cors());
app.use('/static', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const doseTemp = { nome_vacina: "", lote: "56-A", info: "", data_aplicada: "2001-12-04", data_prev: null };
const registroTemp = { CarteiraVacinacao_Bovino_idBovino: 1, Dose_id: null };

/*vacinaS.getAllVacinas()
    .then((vacina) => {
        console.log(vacina[0])
        doseTemp.nome_vacina = vacina[0].nome_vacina
        doseTemp.info = vacina[0].info
        dosesS.addDose(doseTemp)
        dosesS.getAllDosesId(1)
            .then((dose) => {
                //console.log("Dose que quero: ",dose[0])
                registroTemp.Dose_id = dose[0].idDose;
                //console.log(registroTemp)
                registraS.addRegistro(registroTemp);
            })
            .catch((error) => {
                console.error(error);
            })
    })
    .catch((error) => {
        console.error("Erro ao buscar o objeto fazenda:", error);
    });*/

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
