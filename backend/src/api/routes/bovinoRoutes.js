const express = require('express')
const router = express.Router()
const BovinoController = require('../controllers/BovinoController')

router.post('/bovino', BovinoController.create_bovino)
router.get('/bovino', BovinoController.show_bovinos)
router.get('/bovino/:id', BovinoController.show_bovinoId)
router.put('/bovino/:id', BovinoController.update_bovino)
router.delete('/bovino/:idBovino', BovinoController.delete_bovino)

module.exports = router