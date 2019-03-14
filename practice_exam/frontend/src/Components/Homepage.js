import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Review Me ! The Premiere Web Movie Review Website in the world ! </h1>

      <div className='links'>
        <Link to='/movies'>Movies</Link>
        <Link to='/movies/byGenre'>By Genre</Link>
      </div>
    </div>
  )
}






export default Homepage
