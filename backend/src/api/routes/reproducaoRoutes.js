const express = require('express')
const router = express.Router()
const ReproducaoController = require('../controllers/ReproducaoController')

router.post('/reproducao', ReproducaoController.create_reproducao)
router.get('/reproducao', ReproducaoController.show_reproducoes)

module.exports = router