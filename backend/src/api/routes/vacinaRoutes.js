const express = require('express')
const router = express.Router()
const VacinaController = require('../controllers/VacinaController')

router.post('/vacina', VacinaController.create_vacina)
router.get('/vacinas', VacinaController.show_vacinas)
router.get('/vacina', VacinaController.show_vacinas)
router.get('/vacina/:nome', VacinaController.show_vacinaNome)
router.put('/vacina/:id', VacinaController.update_vacina)
router.delete('/vacina/:idVacina', VacinaController.delete_vacina)

module.exports = router