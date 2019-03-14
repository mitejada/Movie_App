import React, { Component } from 'react'
// import axios from 'axios'
import '../../CSS/Movies.css'


class MovieSearchForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      submitted: false
    }
  }

  handleSubmit = (event) => {
   event.preventDefault();
   this.props.findMovie()

   this.setState({
    submitted: true
   })
 }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          className='search_input'
          name='movieName'
          value={this.props.movieTitle}
          onChange={this.props.handleChange}
          type='text'
          placeholder='Search Movie'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default MovieSearchForm
