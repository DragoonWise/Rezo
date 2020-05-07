/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countries', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country_code: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    country_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'countries'
  });
};
