import React, { Component} from 'react'

class SubmitComment extends Component {


  render(){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
          type='text'
          onChange={this.props.handleChange}
          name='commentInput'
          value={this.props.commentInput}
          placeholder='Add a comment'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default SubmitComment
