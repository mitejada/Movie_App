var express = require('express');
var router = express.Router();
const { getAllMovies, getSingleMovieInfo, getAllMoviesBasedOnGenre, getAllCommentsForOneMovie } = require('../db/queries/moviesQueries.js')

/* GET users listing. */
router.get('/', getAllMovies);
router.get('/genre/:id', getAllMoviesBasedOnGenre);
router.get('/:id', getSingleMovieInfo)
router.get('/comments/:id', getAllCommentsForOneMovie)

module.exports = router;
