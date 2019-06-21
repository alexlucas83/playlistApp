'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {});
  Playlist.associate = function (models) {
    Playlist.hasMany(models.Music, { as: 'songs' });
    Playlist.belongsToMany(models.User, { foreignKey: 'playlistId', through: 'UserPlaylist', as: 'users' });
  };
  return Playlist;
};