// actividadRoutes.js
const express = require('express');
const router = express.Router();
const actividadController = require('../controllers/actividadController');

// Rutas para las actividades
router.post('/', actividadController.createActividad);
router.get('/:nombre',actividadController.getActividadesByNombre);
router.delete('/:idActividad', actividadController.deleteActividad);
/*
router.get('/', platoController.getAllPlato);
router.get('/:idplato', platoController.getPlatoById);
router.delete('/:idplato', platoController.deletePlato);
router.put('/:idplato', platoController.updatePlato);*/

module.exports = router;
