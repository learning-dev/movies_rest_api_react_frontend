import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Directors from './components/Directors';
import './App.css';


class  App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/movies/:id" render={props => (
              <React.Fragment>
                <div className="movie-container">
                  <MovieDetails params={props.match.params}/>
                </div>
              </React.Fragment>
            )} />
          < Redirect from='/' to='/movies/' />

          
          <Route exact path="/movies/" render={props => (
              <React.Fragment>
                <div className="movie-container">
                  <Movies />
                </div>
              </React.Fragment>
            )} />
          <Route exact path="/directors" render={props => (
             <React.Fragment>
               <div className="director-container">
                <Directors />
               </div>
             </React.Fragment>

          )} />
            
        </Router>
      </div>
    );
  }
  
}

export default App;
