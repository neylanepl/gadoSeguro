const express = require('express')
const router = express.Router()
const DoseController = require('../controllers/DoseController')

router.post('/dose', DoseController.create_dose)
router.get('/dose', DoseController.show_doses)
router.get('/dose/:id', DoseController.show_dosesId)
router.put('/dose/:idDose', DoseController.update_dose)
router.delete('/dose/:idDose', DoseController.delete_dose)

module.exports = router