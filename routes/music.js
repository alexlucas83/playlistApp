var express = require('express');
var router = express.Router();
const musicController = require('../controllers/musicController');

/* GET users listing. */
router.get('/', musicController.index);
router.get('/:id', musicController.show);
router.post('/', musicController.create);
router.put('/:id', musicController.update);
router.delete('/:id', musicController.delete);

module.exports = router;
