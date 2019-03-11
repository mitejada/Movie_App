var express = require('express');
var router = express.Router();
const { getAllCommentsFromOneMovie } = require('../db/queries/commentsQueries.js')


router.get('/:id', getAllCommentsFromOneMovie)

module.exports = router
