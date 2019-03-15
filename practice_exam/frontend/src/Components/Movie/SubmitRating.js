import React, { Component } from 'react'


class SubmitRating extends Component {


  render(){
    return (
      <div>
      <form onSubmit={this.props.handleRatingSubmit}>
        <label>
          <input type="radio" value="1" onChange={this.props.handleRatingChange} checked={this.props.stars_rating === '1'} />
          1
        </label>
        <label>
          <input type="radio" value="2" onChange={this.props.handleRatingChange} checked={this.props.stars_rating === '2'} />
          2
        </label>
        <label>
          <input type="radio" value="3" onChange={this.props.handleRatingChange} checked={this.props.stars_rating === '3'} />
          3
        </label>
        <label>
          <input type="radio" value="4" onChange={this.props.handleRatingChange} checked={this.props.stars_rating === '4'}/>
          4
        </label>
        <label>
          <input type="radio" value="5" onChange={this.props.handleRatingChange} checked={this.props.stars_rating === '5'}/>
          5
        </label>
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}

export default SubmitRating
