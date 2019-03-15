const { db } = require('./index.js')


const getAllCommentsFromOneMovie = (req, res, next) => {
  const movieComments = req.params.id
  db.one('SELECT movies.id, title, img_url, array_agg(distinct comments.comments_text) AS comments FROM comments JOIN movies ON movies.id = comments.movie_id WHERE movies.id=$1 GROUP BY movies.id, title, img_url', movieComments)
    .then(results => {
      res.status(200).json({
        results: results
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addComment = (req, res, next) => {
  db.none('INSERT INTO comments(comments_text, movie_id) VALUES(${comments_text}, ${movie_id})', {
    comments_text: req.body.comments_text,
    movie_id: req.body.movie_id
  })
    .then(() => {
      res.status(200).json({
        message: 'You have added a comment'
      })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = { getAllCommentsFromOneMovie, addComment }
