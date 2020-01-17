import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import Header from './components/Header';
import Movies from './components/movies';
import MovieDetails from './components/MovieDetails';
import Directors from './components/Directors';
import AddMovie from './components/addMovie';
import './App.css';


class  App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route path="/" exact render={props => (
              <React.Fragment>
              <div className="movie-container">
                <Movies />
              </div>
              </React.Fragment>

            )}/>
            <Route path="/movies/add/" exact render={props => (
                <React.Fragment>
                  <div className="movie-container" >
                    <AddMovie props={props} />
                  </div>
                </React.Fragment>
              )} />

            <Route  exact path="/movies/:id/" render={props => (
                <React.Fragment>
                  <div className="movie-container">
                    <MovieDetails params={props.match.params}/>
                  </div>
                </React.Fragment>
              )} />
            
            <Route exact path="/movies/" render={props => (
                <React.Fragment>
                  <div className='container-btn-add-movie' >
                    <button className='add-movie-btn'>
                      <NavLink  className='add-movie-link' to='/movies/add'>Add Movie</NavLink>
                    </button>  
                  </div>
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
          </Switch>
          
            
        </Router>
      </div>
    );
  }
  
}

export default App;
