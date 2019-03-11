var express = require('express');
var router = express.Router();
const { getAllGenres, getAllMoviesWithOneGenre } = require('../db/queries/genresQueries.js')

/* GET users listing. */
router.get('/', getAllGenres);
router.get('/genres/:id', getAllMoviesWithOneGenre)

module.exports = router;
