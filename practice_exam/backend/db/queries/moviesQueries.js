const { db } = require('./index.js')


const getAllMovies = (req, res, next) => {
db.any('SELECT movies.id, title, img_url, name, array_agg(distinct comments.comments_text) AS comments, ROUND(AVG(stars_rating), 2) AS average_rating FROM movies JOIN genres ON movies.genre_id = genres.id JOIN ratings ON ratings.movieRating_id = movies.id JOIN comments ON comments.movie_id  = movies.id GROUP BY movies.id, title, img_url, name ')
  .then(movies => {
    res.status(200).json({
      movies: movies
    })
  })
  .catch(err => {
    return next(err)
  })
}

const getAllCommentsForOneMovie = (req, res, next) => {
  const movieComments = req.params.id
  db.any('SELECT * FROM movies JOIN comments ON comments.movie_id = movies.id WHERE movies.id=$1', movieComments)
    .then(movie => {
      res.status(200).json({
        movie: movie
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSingleMovieInfo = (req, res, next) => {
  let moviesId = req.params.id
  db.one('SELECT * FROM movies JOIN genres ON genres.id = movies.genre_id JOIN comments ON comments.movie_id = movies.id JOIN ratings ON ratings.movieRating_id = movies.id WHERE movies.id=$1', moviesId )
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


module.exports = { getAllMovies, getSingleMovieInfo, getAllMoviesBasedOnGenre, getAllCommentsForOneMovie }
