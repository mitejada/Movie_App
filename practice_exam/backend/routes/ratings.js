var express = require('express');
var router = express.Router();
const { getAllMoviesWithRatings, getAllRatingsFromOneMovie } = require('../db/queries/ratingsQueries.js');


router.get('/', getAllMoviesWithRatings)
router.get('/:id', getAllRatingsFromOneMovie)




module.exports = router;
