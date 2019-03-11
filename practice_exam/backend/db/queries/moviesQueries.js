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

const getMovieBasedOnId = (req, res, next) => {
  let moviesId = parseInt(req.params.id)
  db.one('SELECT * FROM movies WHERE id=$1', [moviesId])
    .then(movie => {
      res.status(200).json({
        movie: movie
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getAllMoviesBasedOnGenre = (req, res, next) => {
  const movieGenre = req.params.id
  db.any('SELECT * FROM movies JOIN genres ON genres.id = movies.genre_id WHERE genres.id=$1', movieGenre)
    .then(data => {
      res.status(200).json({
        data: data
      })
    })
    .catch(err => {
      return next(err)
    })
}


module.exports = { getAllMovies, getMovieBasedOnId, getAllMoviesBasedOnGenre }
