const express = require('express')
const fazendaS = require("./services/fazendaService")

const app = express()
const port = 3001

//Exemplo de Adição da Fazenda
let fazendaTemp = {idFazenda: 1, nome:"Teste",sitio:"Amarelo",cidade:"Montana",cep:"555-42",complemento:"Duas casas",numero:58}
//fazendaS.addFazenda(fazendaTemp)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(port, () => { 
    console.log('Servidor rodando na porta ', port)
    console.log(fazendaTemp)
})