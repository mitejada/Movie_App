import React, { Component } from 'react'
import axios from 'axios'
import SubmitComment from './SubmitComment'


class SingleMoviePage extends Component {
  state = {
    singleMovieInfo: [],
    comments_text: '',
    submitted: false
  }

  componentDidMount(){
    this.getSingleMovie()
  }

  handleChange = (event) => {
    this.setState({
      comments_text: event.target.value
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
    console.log(this.state.comments_text);
    const displaySingleMovieInfo = this.state.singleMovieInfo.map(movieInfo => {
      return (
        <div key={movieInfo.id}>
          <h3>Title: {movieInfo.title}</h3>
          <img className='movie_img' src={movieInfo.img_url} alt=''></img>
          <p>Rating: {movieInfo.average_rating}</p>
          <p>Comments: {movieInfo.comments}</p>
        </div>
      )
    })
    return(
      <div>
        {displaySingleMovieInfo}
        <SubmitComment handleChange={this.handleChange} submitted={this.state.submitted} handleSubmit={this.handleSubmit} commentInput={this.state.commentInput}/>
      </div>
    )
  }
}


export default SingleMoviePage
