/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tickets', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    StatusCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'statuscode',
        key: 'id'
      }
    },
    Label: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    closed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Customer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tickets'
  });
};
