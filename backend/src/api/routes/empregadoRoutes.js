const express = require('express')
const router = express.Router()
const EmpregadoController = require('../controllers/EmpregadoController')

router.post('/empregado', EmpregadoController.create_empregado)
router.get('/empregado', EmpregadoController.show_empregados)
router.get('/empregado/:cpf', EmpregadoController.show_empregado)
router.delete('/empregado/:cpf', EmpregadoController.delete_empregado)

module.exports = router