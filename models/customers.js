/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PhoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Civility: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Address1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Address2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Address3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Address4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PostCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CountryCode: {
      type: DataTypes.STRING(2),
      allowNull: true
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
    tableName: 'customers'
  });
};
