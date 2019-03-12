var express = require('express');
var router = express.Router();
const { getAllMoviesWithRatings, getAllRatingsFromOneMovie, addRating } = require('../db/queries/ratingsQueries.js');


router.get('/', getAllMoviesWithRatings)
router.get('/:id', getAllRatingsFromOneMovie)
router.post('/new', addRating)




module.exports = router;
