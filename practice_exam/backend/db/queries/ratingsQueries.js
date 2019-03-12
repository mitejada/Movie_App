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

const addRating = (req, res, next) => {
  db.none('INSERT INTO ratings(movieRating_id, stars_rating) VALUES(${movieRating_id}, ${stars_rating})', {
    movieRating_id: req.body.movieRating_id,
    stars_rating: req.body.stars_rating
  })
    .then(() => {
      res.status(200).json({
        message: 'You have added a rating!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getAllRatingsFromOneMovie = (req, res, next) => {
  const movieRating = req.params.id
  db.one('SELECT CAST(AVG(stars_rating) AS DECIMAL(10,2)) FROM ratings JOIN movies ON movies.id = ratings.movieRating_id WHERE movies.id=$1', movieRating)
    .then(data => {
      res.status(200).json({
        data: data
      })
    })
    .catch(err => {
      return next(err)
    })
}




module.exports = { getAllMoviesWithRatings, getAllRatingsFromOneMovie, addRating }
