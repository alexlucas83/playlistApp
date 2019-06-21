const models = require('../models');
const Music = models.Music;
// use Music for class and ress for instance
module.exports = {
  index: function (req, res, next) {
    Music.findAll()
      .then((musics) => { res.json({ musics }); })
      .catch((error) => { console.log(error); });
  },
  show: function (req, res, next) {
    Music.findByPk(req.params.id)
      .then((music) => { res.json({ music }); })
      .catch((error) => { console.log(error); });
  },
  create: function (req, res, next) {
    Music.create({
      playlistId: req.body.playlistId,
      title: req.body.title,
      artist: req.body.artist,
      albumPicture: req.body.albumPicture,
      youtubeUrl: req.body.youtubeUrl
    })
      .then((music) => { res.json({ music }); })
      .catch((error) => { console.log(error); });
  },
  update: function (req, res, next) {
    Music.findByPk(req.params.id)
      .then((music) => {
        music.update({
          playlistId: req.body.playlistId,
          title: req.body.title,
          artist: req.body.artist,
          albumPicture: req.body.albumPicture,
          youtubeUrl: req.body.youtubeUrl
        })
          .then((music) => { res.json({ music }); })
          .catch((error) => { console.log(error); });
      })
      .catch((error) => { console.log(error); });
  },
  delete: function (req, res, next) {
    Music.findByPk(req.params.id)
      .then((music) => {
        music.destroy()
          .then((music) => { res.json({ message: 'Music has been deleted !' }); })
          .catch((error) => { console.log(error); });
      })
      .catch((error) => { console.log(error); });
  },
};
