const express = require('express')
const router = express.Router()
const FazendaController = require('../controllers/FazendaController')

router.post('/fazenda', FazendaController.create_fazenda)
router.get('/fazenda', FazendaController.show_fazendas)
router.get('/fazenda/:id', FazendaController.show_fazendaId)
router.get('/fazenda/:idFazenda/bovinos', FazendaController.show_bovinos_fazenda)
router.put('/fazenda/:id', FazendaController.update_fazenda)
router.delete('/fazenda/:idFazenda', FazendaController.delete_fazenda)

module.exports = router