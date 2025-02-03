// Importar libreria para respuestas
const Respuesta = require("../utils/respuesta");
const { logMensaje } = require("../utils/logger.js");
// Recuperar función de inicialización de modelos
const initModels = require("../models/init-models.js").initModels;
// Crear la instancia de sequelize con la conexión a la base de datos
const sequelize = require("../config/sequelize.js");
// Cargar las definiciones del modelo en sequelize
const models = initModels(sequelize);
// Recuperar el modelo festival
//const Festival = models.festival;

const Actividad = models.actividad;


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

    

}

module.exports = new ActividadController();
