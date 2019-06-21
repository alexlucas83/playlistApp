const models = require('../models');
const User = models.User;
const Playlist = models.Playlist;
const Music = models.Music;

User.create({
  firstName: 'John',
  lastName: 'DOE',
  email: 'john-doe@gmail.com',
  password: 'test12334'
})
  .then((user) => {
    Playlist.findByPk(3)
      .then((playlist) => {
        user.addTartanpion(playlist)
          .then(linkedUser => resizeBy.json({}));
      })
      .catch((error) => { console.log(error); });
  });