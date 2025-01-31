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
    //OBTENER ACTIVIDAD POR ID FESTIVAL
    async getActividadesByFestivalId(req, res) {
        const idFestival = req.params.idFestival;  // Extraemos el idFestival de los parámetros de la URL
        try {
            // Usamos el modelo de Actividad y lo relacionamos con el idFestival
            const actividades = await Actividad.findAll({
                where: { idFestival: idFestival }  // Filtramos las actividades por el festivalId
            });
    
            if (actividades.length > 0) {
                res.json(Respuesta.exito(actividades, "Actividades recuperadas correctamente"));
            } else {
                res.status(404).json(Respuesta.error(null, "No se encontraron actividades para este festival"));
            }
        } catch (err) {
            logMensaje("Error :" + err);
            res.status(500).json(
                Respuesta.error(null, `Error al recuperar las actividades del festival: ${req.originalUrl}`)
            );
        }
    }




    //OBTENER UN FESTIVAL POR ID
    async getFestivalById(req, res) {
        // El id plato viene en la ruta /api/platos/:idplato
        const idFestival = req.params.idFestival;
        try {
          const fila = await Festival.findByPk(idFestival);
          if (fila) {
            // Si se ha recuprado un plato
            res.json(Respuesta.exito(fila, "Festival recuperado"));
          } else {
            res.status(404).json(Respuesta.error(null, "Festival no encontrado"));
          }
        } catch (err) {
          logMensaje("Error :" + err);
          res
            .status(500)
            .json(
              Respuesta.error(
                null,
                `Error al recuperar los datos: ${req.originalUrl}`
              )
            );
        }
      }   

//MODIFICAR FESTIVAL
    async updateFestival(req, res) {
        const festival = req.body; // Recuperamos datos para actualizar
        const idFestival = req.params.idFestival; // dato de la ruta

        // Petición errónea, no coincide el id del festival de la ruta con el del objeto a actualizar
        if (idFestival != festival.idFestival) {
            return res
                .status(400)
                .json(Respuesta.error(null, "El id del festival no coincide"));
        }

        try {
            const numFilas = await Festival.update({ ...festival }, { where: { idFestival } });

            if (numFilas == 0) {
                // No se ha encontrado lo que se quería actualizar o no hay nada que cambiar
                res
                    .status(404)
                    .json(Respuesta.error(null, "No encontrado o no modificado: " + idFestival));
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

    //ELIMINAR FESTIVAL
    async deleteFestival(req, res) {
        const idFestival = req.params.idFestival;
        try {
            const numFilas = await Festival.destroy({ where: { idFestival:idFestival, }, });

            if (numFilas == 0) {
                res.status(404).json(Respuesta.error(null, "Festival no encontrado: " + idFestival));
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

module.exports = new FestivalController();