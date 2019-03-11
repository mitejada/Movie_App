var express = require('express');
var router = express.Router();
const { getAllMovies, getMovieBasedOnId, getAllMoviesBasedOnGenre } = require('../db/queries/moviesQueries.js')

/* GET users listing. */
router.get('/', getAllMovies);
router.get('/genre/:id', getAllMoviesBasedOnGenre);
router.get('/:id', getMovieBasedOnId)

module.exports = router;
