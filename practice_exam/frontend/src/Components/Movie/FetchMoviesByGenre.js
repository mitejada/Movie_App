import React, { Component } from 'react'
import axios from 'axios'

class FetchMoviesByGenre extends Component {
  constructor(props){
    super(props)
    this.state = {
      genreStorage: [],
      genreName: [],
      allGenres: [],
      selectedGenreId: ''
    }
  }

  componentDidMount(){
    this.getAllGenres()
    this.getGenreName()
  }

  handleChange = (event) => {
    this.setState({
      selectedGenreId: event.target.value
    })
  }

  getGenreName = () => {
    axios.get('/genres/titles')
    .then(response => {
      this.setState({
        genreName: response.data.data
      })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.get(`/movies/genre/${this.state.selectedGenreId}`)
    .then(results => {
      this.setState({
        genreStorage: results.data.data
      })
    })
  }

  getAllGenres = () => {
    axios.get('/genres')
    .then(response => {
      this.setState({
        allGenres: response.data.data
      })
    })
  }


  render(){
    const renderByGenre = this.state.genreName.map(genre => {
      return (
        <option value={genre.id} key={genre.id}>
          {genre.name}
        </option>
      )
    })

    const infoForGenre = this.state.genreStorage.map(info => {
        return (
          <div className='movie_input' key={info.id}>
          <h3>Title: {info.title}</h3>
          <img className='movie_img' src={info.img_url} alt=''></img>
          <p>Genre: {info.name}</p>
          </div>
        )
  })

  // const displayAllGenreFirst = this.state.allGenres.map(showEverything => {
  //   return (
  //     <div className='movie_input' key={showEverything.id}>
  //     <h3>Title: {showEverything.title}</h3>
  //     <img className='movie_img' src={showEverything.img_url} alt=''></img>
  //     <p>Genre: {showEverything.name}</p>
  //     </div>
  //   )
  // })

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.selectedGenreId} onChange={this.handleChange}>
          <option value=''>Select Genre</option>
          {renderByGenre}
        </select>
        <button type='submit'>Submit</button>
      </form>
        {infoForGenre}
      </div>
    )
  }
}





export default FetchMoviesByGenre
