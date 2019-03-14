import React, { Component } from 'react'
import axios from 'axios'

class FetchMoviesByGenre extends Component {
  constructor(props){
    super(props)
    this.state = {
      genreStorage: [],
      clicked: false
    }
  }

  componentDidMount(){
    this.getMoviesByGenre()
  }

  handleClick = (event) => {
    this.setState({
      clicked: event.target.value
    })
  }

  getMoviesByGenre = (id) => {
    axios.get('/genres')
      .then(results => {
        let newResults = new Set([results])
        console.log('hello', [...newResults]);
        // console.log(results)
        this.setState({
          genreStorage: results.data.data
        })
      })
  }

  render(){
    const renderByGenre = this.state.genreStorage.map(genre => {
      console.log(genre);
      return (
        <option key={genre.id}>
          {genre.name}
        </option>
      )
    })

    const infoForGenre = this.state.genreStorage.map(info => {
      if(this.state.clicked === info.name) {
        return (
          <div className='movie_input' key={info.id}>
          <h3>Title: {info.title}</h3>
          <img src={info.img_url} alt=''></img>
          <p>Genre: {info.name}</p>
          </div>
        )
      } else {
        return null
      }
      })

    return (
      <div>
        <select onClick={this.handleClick}>
          <option>Select Genre</option>
          {renderByGenre}
        </select>
        {infoForGenre}
      </div>
    )
  }
}





export default FetchMoviesByGenre
