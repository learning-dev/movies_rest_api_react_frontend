import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// function MoviesHeader() {
//   return (
//     <header style={headerStyle}>
//       <h1>Movies </h1>
//        <Link style={linkStyle} to="/movies">Movies</Link> | <Link style={linkStyle} to="/directors">Directors</Link> 
//     </header>
//   )
// }

// const headerStyle = {
//   background: '#0d0d0d',
//   color: '#fff',
//   textAlign: 'center',
//   padding: '10px'
// }

// const linkStyle = {
//   color: '#fff',
//   textDecoration: 'none',
// }





class Movies extends Component {
  
  render() {

    return (
        <React.Fragment>
          <h1>List of Movies</h1>
        </React.Fragment>
    );

  }
}

export default Movies;
