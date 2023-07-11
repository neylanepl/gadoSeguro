const express = require('express')
const router = express.Router()
const PessoaController = require('../controllers/PessoaController')

router.post('/pessoa', PessoaController.create_pessoa)
router.get('/pessoa', PessoaController.show_pessoas)
router.put('/pessoa/:cpf', PessoaController.update_pessoa)
router.delete('/pessoa/:cpf', PessoaController.delete_pessoa)
router.post('/login', PessoaController.login)

module.exports = router