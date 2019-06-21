'use strict';
module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define('Music', {
    playlistId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    albumPicture: DataTypes.STRING,
    youtubeUrl: DataTypes.STRING
  }, {});
  Music.associate = function (models) {
    Music.belongsTo(models.Playlist, { as: 'playlist' });
  };
  return Music;
};