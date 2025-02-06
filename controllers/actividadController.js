// Importar libreria para respuestas
const Respuesta = require("../utils/respuesta");
const { logMensaje } = require("../utils/logger.js");
const { Op } = require('sequelize');
// Recuperar función de inicialización de modelos
const initModels = require("../models/init-models.js").initModels;
// Crear la instancia de sequelize con la conexión a la base de datos
const sequelize = require("../config/sequelize.js");
// Cargar las definiciones del modelo en sequelize
const models = initModels(sequelize);
// Recuperar el modelo festival
//const Festival = models.festival;

const Actividad = models.actividad;
const Festival = models.festival;


class ActividadController{

    async createActividad(req, res) {
        // Implementa la lógica para crear un nuevo plato
        const actividad = req.body;
    
        try {
            const actividadNueva = await Actividad.create(actividad);
    
            res.status(201).json(Respuesta.exito(actividadNueva, "Actividad añadida"));
        } catch (err) {
            logMensaje("Error :" + err);
            res
                .status(500)
                .json(Respuesta.error(null, `Error al crear una actividad nuevo: ${actividad}`));
        }
    }

    async getActividadesByNombre(req, res) {
        const nombre = req.params.nombre;  // Extraemos el idFestival de los parámetros de la URL
        console.log("Nombre:",nombre);
        try {
            // Usamos el modelo de Actividad y lo relacionamos con el idFestival
            const actividades = await Actividad.findAll({
                where: { nombre: nombre },
               
                include: [
                    {
                      model: Festival,
                      as: "idFestival_festival",
                      attributes: ["nombre", "ciudad", "fechaInicio", "fechaFin"],
                    }
                  ]
            });

            if(actividades.length === 0){
                return res.status(404).json({
                    error: "No se han encontrado actividades con el nombre indicado"
                });
            } else{
                return res.status(200).json(Respuesta.exito(actividades, "Datos de actividades recuperados"));
                   
            }

        } catch (err) {
            console.error("Error:", err);
            res.status(500).json({
            error: `Error al recuperar los datos: ${req.originalUrl}`
        });   


    }

}
async deleteActividad(req, res) {
        const idActividad = req.params.idActividad;
        try {
            const numFilas = await Actividad.destroy({ where: { idActividad:idActividad, }, });

            if (numFilas == 0) {
                res.status(404).json(Respuesta.error(null, "Actividad no encontrado: " + idActividad));
            } else {
                res.status(204).send();
            }
        } catch (err) {
            logMensaje("Error :" + err);
            res
                .status(500)
                .json(
                    Respuesta.error(
                        null,
                        `Error al eliminar los datos: ${req.originalUrl}`
                    )
                );
        }
    }

    
}
module.exports = new ActividadController();
