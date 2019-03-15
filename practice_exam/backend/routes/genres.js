var express = require('express');
var router = express.Router();
const { getAllGenres, getAllMoviesWithOneGenre, getGenreTitles } = require('../db/queries/genresQueries.js')

/* GET users listing. */
router.get('/', getAllGenres);
router.get('/genres/:id', getAllMoviesWithOneGenre)
router.get('/titles', getGenreTitles)

module.exports = router;
