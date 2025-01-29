const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actividad', {
    idActividad: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    duracion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idFestival: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'festival',
        key: 'idFestival'
      }
    }
  }, {
    sequelize,
    tableName: 'actividad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idActividad" },
        ]
      },
      {
        name: "FK",
        using: "BTREE",
        fields: [
          { name: "idFestival" },
        ]
      },
    ]
  });
};
