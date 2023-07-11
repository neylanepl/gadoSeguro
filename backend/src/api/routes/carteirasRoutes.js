const express = require('express')
const router = express.Router()
const CarteiraController = require('../controllers/CarteiraController')

router.post('/carteira', CarteiraController.create_carteira)
router.get('/carteira', CarteiraController.show_carteiras)
router.get('/carteira/:id', CarteiraController.show_carteiraId)
router.get('/carteira/:id/doses', CarteiraController.show_registros_carteiraId)
router.delete('/carteira/:idBovino', CarteiraController.delete_carteira)

module.exports = router