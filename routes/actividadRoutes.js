// actividadRoutes.js
const express = require('express');
const router = express.Router();
const actividadController = require('../controllers/actividadController');
router.post('/', actividadController.createActividad);
/*
router.get('/', platoController.getAllPlato);
router.get('/:idplato', platoController.getPlatoById);
router.delete('/:idplato', platoController.deletePlato);
router.put('/:idplato', platoController.updatePlato);*/

module.exports = router;
