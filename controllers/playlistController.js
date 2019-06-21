const models = require('../models');
const Playlist = models.Playlist;

module.exports = {
  index: function (req, res, next) {
    Playlist.findAll()
      .then((playlists) => { res.json({ playlists }); })
      .catch((error) => { res.status(500).json({ error }); });
  },
  show: function (req, res, next) {
    Playlist.findByPk(req.params.id, { include: ['songs'] })
      .then((playlist) => { res.json({ playlist }); })
      .catch((error) => { res.status(500).json({ error }); });
  },
  create: function (req, res, next) {
    Playlist.create({
      title: req.body.title,
      genre: req.body.genre
    })
      .then((playlist) => { res.json({ playlist }); })
      .catch((error) => { res.status(500).json({ error }); });
  },
  update: function (req, res, next) {
    Playlist.findByPk(req.params.id)
      .then((playlist) => {
        playlist.update({
          title: req.body.title,
          genre: req.body.genre
        })
          .then((playlist) => { res.json({ playlist }); })
          .catch((error) => { res.status(500).json({ error }); });
      })
      .catch((error) => { res.status(500).json({ error }); });
  },
  delete: function (req, res, next) {
    Playlist.findByPk(req.params.id)
      .then((playlist) => {
        playlist.destroy()
          .then((playlist) => { res.json({ message: 'Playlist has been deleted !' }); })
          .catch((error) => { res.status(500).json({ error }); });
      })
      .catch((error) => { res.status(500).json({ error }); });
  },
  search: function (req, res, next) {
    const queryTitle = req.query.title ? { title: req.query.title } : {}
    const queryGenre = req.query.genre ? { genre: req.query.genre } : {}
    const query = { ...queryTitle, ...queryGenre }
    Playlist.findOne({ where: query })
      .then((response) => { res.json({ response }); })
      .catch((error) => { res.json({ error }); });
  }
};