const express = require('express')
const router = express.Router()
const IngredienteController = require('../controllers/IngredienteController')

router.post('/ingrediente', IngredienteController.create_ingrediente)
router.get('/ingrediente', IngredienteController.show_ingredientes)
router.get('/ingrediente/:id', IngredienteController.show_ingredienteId)
router.put('/ingrediente/:id', IngredienteController.update_ingrediente)
router.delete('/ingrediente/:idIngrediente', IngredienteController.delete_ingrediente)

module.exports = router