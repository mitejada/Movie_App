const { db } = require('./index.js')

const getAllMoviesWithRatings = (req, res, next) => {
  db.any('SELECT * FROM ratings')
    .then(data => {
      res.status(200).json({
        data: data
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getAllRatingsFromOneMovie = (req, res, next) => {
  const movieRating = req.params.id
  db.one('SELECT * FROM ratings JOIN movies ON movies.id = ratings.movieRating_id WHERE movies.id=$1', movieRating)
    .then(data => {
      res.status(200).json({
        data: data
      })
    })
    .catch(err => {
      return next(err)
    })
}




module.exports = { getAllMoviesWithRatings, getAllRatingsFromOneMovie }
