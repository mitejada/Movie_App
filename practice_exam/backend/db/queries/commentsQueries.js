const { db } = require('./index.js')


const getAllCommentsFromOneMovie = (req, res, next) => {
  const movieComments = req.params.id
  db.one('SELECT * FROM comments JOIN movies ON movies.id = comments.movie_id WHERE movies.id=$1', movieComments)
    .then(results => {
      res.status(200).json({
        results: results
      })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = { getAllCommentsFromOneMovie }
