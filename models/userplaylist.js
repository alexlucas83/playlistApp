'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPlaylist = sequelize.define('UserPlaylist', {
    userId: DataTypes.INTEGER,
    playlistId: DataTypes.INTEGER
  }, {});
  UserPlaylist.associate = function (models) {
    UserPlaylist.belongsTo(models.User, { as: 'user' });
    UserPlaylist.belongsTo(models.Playlist, { as: 'playlist' });
  };
  return UserPlaylist;
};