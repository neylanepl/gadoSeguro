const express = require('express')
const router = express.Router()
const PessoaController = require('../controllers/PessoaController')

router.post('/pessoa', PessoaController.create_pessoa)
router.post('/login', PessoaController.login)

module.exports = router