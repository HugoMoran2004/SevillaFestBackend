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
const Festival = models.festival;

class FestivalController {
    async createFestival(req, res) {
        // Implementa la lógica para crear un nuevo plato
        const festival = req.body;

        try {
            const festivalNuevo = await Festival.create(festival);

            res.status(201).json(Respuesta.exito(festivalNuevo, "Festival añadido"));
        } catch (err) {
            logMensaje("Error :" + err);
            res
                .status(500)
                .json(Respuesta.error(null, `Error al crear un festival nuevo: ${festival}`));
        }
    }
    //LISTAR TODOS LOS FESTIVALES
    async getAllFestival(req, res) {
        try {
            const data = await Festival.findAll(); // Recuperar todos los platos
            res.json(Respuesta.exito(data, "Datos de festivales recuperados"));
        } catch (err) {
            // Handle errors during the model call
            res
                .status(500)
                .json(
                    Respuesta.error(
                        null,
                        `Error al recuperar los datos de los festivales: ${req.originalUrl}`
                    )
                );
        }
    }

//MODIFICAR FESTIVAL
    async updateFestival(req, res) {
        const festival = req.body; // Recuperamos datos para actualizar
        const idfestival = req.params.idfestival; // dato de la ruta

        // Petición errónea, no coincide el id del plato de la ruta con el del objeto a actualizar
        if (idfestival != festival.idfestival) {
            return res
                .status(400)
                .json(Respuesta.error(null, "El id del plato no coincide"));
        }

        try {
            const numFilas = await Festival.update({ ...festival }, { where: { idfestival } });

            if (numFilas == 0) {
                // No se ha encontrado lo que se quería actualizar o no hay nada que cambiar
                res
                    .status(404)
                    .json(Respuesta.error(null, "No encontrado o no modificado: " + idfestival));
            } else {
                // Al dar status 204 no se devuelva nada
                // res.status(204).json(Respuesta.exito(null, "Festival actualizado"));
                res.status(204).send();
            }
        } catch (err) {
            logMensaje("Error :" + err);
            res
                .status(500)
                .json(
                    Respuesta.error(
                        null,
                        `Error al actualizar los datos: ${req.originalUrl}`
                    )
                );
        }
    }
}

module.exports = new FestivalController();