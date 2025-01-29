// festivalRoutes.js
const express = require('express');
const router = express.Router();
const festivalController = require('../controllers/festivalController');
router.post('/', festivalController.createFestival);
router.get('/', festivalController.getAllFestival);
router.put('/:idfestival', festivalController.updateFestival);
/*

router.get('/:idplato', platoController.getPlatoById);

router.delete('/:idplato', platoController.deletePlato);
*/
module.exports = router;
