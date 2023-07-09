const express = require('express')
const router = express.Router()
const FazendaController = require('../controllers/FazendaController')

router.post('/fazenda', FazendaController.create_fazenda)
router.delete('/fazenda/:idFazenda', FazendaController.delete_fazenda)

module.exports = router