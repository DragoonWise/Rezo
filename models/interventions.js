/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interventions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    InterventionType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      references: {
        model: 'interventiontype',
        key: 'id'
      }
    },
    Reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StatusCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'statuscode',
        key: 'id'
      }
    },
    StartTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    EndTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Ticket_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tickets',
        key: 'id'
      }
    },
    User_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
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
    tableName: 'interventions'
  });
};
