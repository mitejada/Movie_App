import React from 'react';

const DropBox = (props) => {
  return (
    <select onClick={props.handleClick}>
      <option value="null"> Select A Genre </option>
      <option value="1">Horror</option>
      <option value="2">Comedy</option>
      <option value="3">Action</option>
      <option value="4">Adventure</option>
      <option value="5">Thriller</option>
    </select>
  )
}

export default DropBox;
