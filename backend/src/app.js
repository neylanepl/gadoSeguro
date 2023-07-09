const express = require('express')

const routesFazenda = require('./api/routes/fazendaRoutes')

const app = express()
const port = 3004


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