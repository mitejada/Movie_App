import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import SubmitComment from './SubmitComment'
import SubmitRating from './SubmitRating'


class SingleMoviePage extends Component {
  state = {
    singleMovieInfo: [],
    comments_text: '',
    stars_rating: '',
    submitted: false,
    ratingSubmitted: false
  }

  componentDidMount(){
    this.getSingleMovie()
  }

  handleChange = (event) => {
    this.setState({
      comments_text: event.target.value
    })
  }

  handleRatingChange = (event) => {
    this.setState({
      stars_rating: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { comments_text } = this.state

    axios.post('/comments/new', {comments_text: comments_text, movie_id: this.props.match.params.id})
      .catch(err => {
        return Error
      })

    this.setState({
      submitted: true,
      comments_text: ''
    })
  }

  handleRatingSubmit = (event) => {
    event.preventDefault()

    const { stars_rating } = this.state

    axios.post('/ratings/new', {movieRating_id: this.props.match.params.id, stars_rating: stars_rating})
      .catch(err => {
        return Error
      })

    this.setState({
      ratingSubmitted: true,
      stars_rating: ''
    })
  }

  getSingleMovie = () => {
    const movieId = this.props.match.params.id
    axios.get(`/movies/${movieId}`)
      .then(results => {
        this.setState({
          singleMovieInfo: results.data.movie
        })
      })
  }

  render(){
    const displaySingleMovieInfo = this.state.singleMovieInfo.map(movieInfo => {
      return (
        <div key={movieInfo.id}>
          <h3>Title: {movieInfo.title}</h3>
          <img className='movie_img' src={movieInfo.img_url} alt=''></img>
          <p>Rating: {movieInfo.average_rating}</p>
          Comments: {movieInfo.comments.map(i => {
            return (
              <ul className='comments' key={i}>{i}</ul>
            )
          })}
        </div>
      )
    })
    return(
      <div>
        {displaySingleMovieInfo}
        <SubmitRating
        handleRatingSubmit={this.handleRatingSubmit}
        ratingSubmitted={this.state.ratingSubmitted}
        stars_rating={this.state.stars_rating}
        handleRatingChange={this.handleRatingChange}
        />
        <SubmitComment
        handleChange={this.handleChange}
        submitted={this.state.submitted}
        handleSubmit={this.handleSubmit}
        commentInput={this.state.commentInput}
        />

        <Link to='/movies' className='singleMovie_backButton'><button className='singleMovie_backButton'>Back</button></Link>
      </div>
    )
  }
}


export default withRouter(SingleMoviePage)
