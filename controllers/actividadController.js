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
/*
            res.json({
                datos: actividades.map(actividad => ({
                    nombre: actividad.nombre,
                    descripcion: actividad.descripcion,
                    festival: actividad.idFestival_festival.nombre // Nombre del festival asociado
                })),
                mensaje: 'Actividades recuperadas correctamente'
            });*/

        } catch (err) {
            console.error("Error:", err);
            res.status(500).json({
            error: `Error al recuperar los datos: ${req.originalUrl}`
        });   


    }

}







/*
    async getActividadesByCiudad(req, res) {
        const ciudad = req.params.ciudad;  // Extraemos el idFestival de los parámetros de la URL
        try {
            // Usamos el modelo de Actividad y lo relacionamos con el idFestival
            const festivales = await Festival.findAll({
                where: { ciudad: ciudad }
            });

            if(festivales.length === 0){
                return res.status(404).json({
                    error: "No se han encontrado festivales en la ciudad indicada"
                })
            }

            const festivalesConActividades = [];

            for (const festival of festivales) {
                const actividades = await Actividad.findAll({
                    where: { idFestival: festival.idFestival }
                });

                festivalesConActividades.push({
                    nombrefestival: festival.nombre,
                    actividades: actividades
                });
            }
            return res.status(200).json({
                datos: festivalesConActividades,
                mensaje: "Datos de actividades recuperados"
            })
        } catch (err) {
            // Handle errors during the model call
            console.error(err);
            return res.status(500).json({
                error: "Error al recuperar los datos de las actividades"
        });
    }

}*/
    
}
module.exports = new ActividadController();
