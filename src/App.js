import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Movies from './components/Movies';
import './App.css';


class  App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" render={props => (
              <React.Fragment>
              </React.Fragment>
            )} />
          <Route exact path="/movies" render={props => (
              <React.Fragment>
                <Movies />
              </React.Fragment>
            )} />
          <Route exact path="/directors" render={props => (
             <React.Fragment>
               
             </React.Fragment>

          )} />
            
        </Router>
      </div>
    );
  }
  
}

export default App;
