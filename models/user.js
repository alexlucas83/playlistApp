'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.belongsToMany(models.Playlist, { foreignKey: 'userId', through: 'UserPlaylist', as: 'tartanpions' });
  };
  return User;
};