const express = require('express')
const router = express.Router()
const BoiController = require('../controllers/BoiController')

router.post('/boi', BoiController.create_boi)

module.exports = router