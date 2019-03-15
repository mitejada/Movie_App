var express = require('express');
var router = express.Router();
const { getAllCommentsFromOneMovie, addComment } = require('../db/queries/commentsQueries.js')

router.get('/:id', getAllCommentsFromOneMovie)
router.post('/new', addComment)

module.exports = router
