import React, { Component } from 'react'
// import axios from 'axios'
import '../../CSS/Movies.css'


class MovieSearchForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      movieName: ''
    }
  }

  handleSubmit = (event) => {
    console.log(this.state.movieName);
   event.preventDefault();
   this.props.findMovie(this.state.movieName)
 }

 handleChange = (event) => {
   this.setState({
     movieName: event.target.value
   })
 }

  render(){
    const selectedMovieInfo = this.props.selectedMovie.map(info => {
        return (
          <div key={info.id}>
          <h3>Title: {info.title}</h3>
          <img className='movie_img' src={info.img_url} alt=''></img>
          <p>Ratings: {info.average_rating}</p>
          </div>
        )
    })
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          className='search_input'
          name='movieName'
          value={this.state.movieName}
          onChange={this.handleChange}
          type='text'
          placeholder='Search Movie'/>
          <button type='submit'>Submit</button>
        </form>
        {selectedMovieInfo}
      </div>
    )
  }
}

export default MovieSearchForm
