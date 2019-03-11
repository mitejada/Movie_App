const { db } = require('./index.js')


const getAllMovies = (req, res, next) => {
db.any('SELECT * FROM movies')
  .then(movies => {
    res.status(200).json({
      movies: movies
    })
  })
  .catch(err => {
    return next(err)
  })
}

const getAllMoviesBasedOnId = (req, res, next) => {
  let moviesId = parseInt(req.params.id)
  db.one('SELECT * FROM movies WHERE id=$1', moviesId)
    .then(movies => {
      res.status(200).json({
        movies: movies
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getAllMoviesBasedOnGenre = (req, res, next) => {

}


module.exports = { getAllMovies, getAllMoviesBasedOnId }
