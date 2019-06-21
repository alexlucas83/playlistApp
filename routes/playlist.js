var express = require('express');
var router = express.Router();
const playlistController = require('../controllers/playlistController');

/* GET users listing. */
router.get('/', playlistController.index);
router.get('/:id(\\d+)', playlistController.show);
router.get('/search', playlistController.search);
router.post('/', playlistController.create);
router.put('/:id', playlistController.update);
router.delete('/:id', playlistController.delete);
module.exports = router;
