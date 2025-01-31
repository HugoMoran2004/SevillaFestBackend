// festivalRoutes.js
const express = require('express');
const router = express.Router();
const festivalController = require('../controllers/festivalController');
router.post('/', festivalController.createFestival);
router.get('/', festivalController.getAllFestival);
router.put('/:idFestival', festivalController.updateFestival);
router.get('/:idFestival', festivalController.getFestivalById);
router.delete('/:idFestival', festivalController.deleteFestival);
router.get('/festival/:idFestival/actividades', festivalController.getActividadesByFestivalId);
module.exports = router;
