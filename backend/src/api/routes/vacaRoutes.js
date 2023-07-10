const express = require('express')
const router = express.Router()
const VacaController = require('../controllers/VacaController')

router.post('/vaca', VacaController.create_vaca)
router.get('/vaca', VacaController.show_vacas)
router.get('/vaca/:id', VacaController.show_vacaId)
router.put('/vaca/:id', VacaController.update_vaca)
router.delete('/vaca/:idVaca', VacaController.delete_vaca)

module.exports = router