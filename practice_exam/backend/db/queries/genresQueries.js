const { db } = require('./index.js')

const getAllGenres = (req, res, next) => {
  db.any('SELECT * FROM genres')
    .then(data => {
      res.status(200).json({
        data: data
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getAllMoviesWithOneGenre = (req, res, next) => {
  let genreId = parseInt(req.params.id)
  db.one('SELECT * FROM genres WHERE id=$1', genreId)
    .then(results => {
      res.status(200).json({
        results: results
      })
    })
    .catch(err => {
      return next(err)
    })
}






module.exports = { getAllGenres, getAllMoviesWithOneGenre }
