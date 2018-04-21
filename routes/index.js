var express = require('express');
var videoController = require('../controllers/videoAppController');
var router = express.Router();

/* GET home page. */
router.get('/', videoController.get_all_movies);

router.get('/movies/:id', videoController.get_one_movie );

router.post('/api', videoController.post_new_review);

//Get info movie feature
router.get('/movie/:id', videoController.get_movie_info );

//Get comments
router.get('/comments/movie/:id', videoController.get_movie_info );

//Get cast
router.get('/casting/movie/:id', videoController.get_casting );

module.exports = router;
