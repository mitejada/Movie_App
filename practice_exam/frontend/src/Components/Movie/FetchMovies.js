import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MovieSearchForm from './MovieSearchForm'
import '../../CSS/Movies.css'


class FetchMovies extends Component {
  constructor(){
    super()
    this.state = {
      movieStorage: [],
      displaying: false,
      movieTitle: '',
      submit: false,
      selectedMovie: []
    }
  }

  handleClick = (event) => {
    this.setState({
      displaying: event.target.value
    })
  }

  handleChange = (event) => {
    this.setState({
      movieTitle: event.target.value
    })
  }

  findMovie = () => {
    let movieSearch = this.state.movieStorage.filter(movie => {
      if(movie.title.toLowerCase() === this.state.movieTitle.toLowerCase()) {
        return true
      } else {
        return false
      }
    })

    if(movieSearch) {
      this.setState({
        selectedMovie: movieSearch,
        movieTitle: ''
      })
    }

    console.log(movieSearch);
  }


  componentDidMount(){
    this.getAllMovies()
  }

  renderMovieList = () => {
    if(this.state.selectedMovie.length) {
      const renderMovieInfo = this.state.selectedMovie.map(info => {
        console.log(info);
        return (
          <div key={info.id}>
          <Link to={'/movies/' + info.id}><h2>Title: {info.title}</h2></Link>
          <img className='movie_img' src={info.img_url} alt=''></img>
          <p>Ratings: {info.average_rating}</p>
          <p>Comments: {info.comments}</p>
          </div>
        )
      })
      return renderMovieInfo
    } else {
      const renderMovieInfo = this.state.movieStorage.map(info => {
        console.log(info);
        return (
          <div key={info.id}>
          <h3>Title: {info.title}</h3>
          <img className='movie_img' src={info.img_url} alt=''></img>
          <p>Ratings: {info.average_rating}</p>
          <p>Comments: {info.comments}</p>
          </div>
        )
      })
      return renderMovieInfo
    }
  }


  getAllMovies = () => {
    axios.get('/movies')
      .then(results => {
        this.setState({
          movieStorage: results.data.movies
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render(){


      return (
        <div>
        <MovieSearchForm findMovie={this.findMovie} handleChange={this.handleChange} movieTitle={this.state.movieTitle} selectedMovie={this.state.selectedMovie}/>
        {this.renderMovieList()}
        </div>

      )
  }
}


export default FetchMovies
