import React, { Component } from 'react'
import axios from 'axios'
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

  findMovie = (movieName) => {
    let movieSearch = this.state.movieStorage.find(movie => {
      console.log('hello');
      if(movie.title.toLowerCase() === this.state.movieTitle.toLowerCase()) {
        this.setState({
          selectedMovie: movie,
          submit: true
        })
      }
      return {movieSearch}
    })
  }

  componentDidMount(){
    this.getAllMovies()
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

    const renderMovieInfo = this.state.movieStorage.map(info => {
        return (
          <div key={info.id}>
          <h3>Title: {info.title}</h3>
          <img className='movie_img' src={info.img_url} alt=''></img>
          <p>Ratings: {info.average_rating}</p>
          </div>
        )
    })

    if(!this.state.submit) {
      return (
        <div>
          {renderMovieInfo}
        </div>
      )
  } else {
    return (
      <div>
      <MovieSearchForm findMovie={this.findMovie} selectedMovie={this.state.selectedMovie}/>
      </div>
    )
  }
  }
}


export default FetchMovies
