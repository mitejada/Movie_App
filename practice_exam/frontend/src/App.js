import React, { Component } from 'react';
import Homepage from './Components/Homepage'
import FetchMovies from './Components/Movie/FetchMovies'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/movies' component={FetchMovies} />
        </Switch>
      </div>
    );
  }
}

export default App;
