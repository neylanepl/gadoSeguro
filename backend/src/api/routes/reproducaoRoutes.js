const express = require('express')
const router = express.Router()
const ReproducaoController = require('../controllers/ReproducaoController')

router.post('/reproducao', ReproducaoController.create_reproducao)

module.exports = router