const express = require('express')
const router = express.Router()
const BoiController = require('../controllers/BoiController')

router.post('/boi', BoiController.create_boi)
router.get('/boi', BoiController.show_boi)

module.exports = router