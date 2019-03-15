import React, { Component } from 'react';
import Homepage from './Components/Homepage'
import FetchMovies from './Components/Movie/FetchMovies'
import FetchMoviesByGenre from './Components/Movie/FetchMoviesByGenre'
import SingleMoviePage from './Components/Movie/SingleMoviePage'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/movies' component={FetchMovies} />
          <Route path='/movies/byGenre' component={FetchMoviesByGenre} />
          <Route path='/movies/:id' component={SingleMoviePage} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
