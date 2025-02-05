var DataTypes = require("sequelize").DataTypes;
var _actividad = require("./actividad");
var _festival = require("./festival");

function initModels(sequelize) {
  var actividad = _actividad(sequelize, DataTypes);
  var festival = _festival(sequelize, DataTypes);

          actividad.belongsTo(festival, { as: "idFestival_festival", foreignKey: "idFestival"});
          festival.hasMany(actividad, { as: "actividad", foreignKey: "idFestival"});

          return {
            actividad,
            festival,
          };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
