import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieItem from './MovieItem';

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

  state = {
    movies : []
  }
  componentDidMount = () => {
    this.getAllMovies()
    
  }

  getAllMovies() {
    axios.get('http://localhost:3000/api/movies/').then(res => {this.setState({movies: res.data}); console.log(this.state.movies)});
  }

  delMovies(id) {
    this.setState({ movies: [...this.state.movies.filter(movie => movie.id !== id)] });
  }
  
  render() {
    return this.state.movies.map((movie) =>(
  
      <MovieItem key={movie.id} movie={movie} delMovies = {this.delMovies}  />
      
    ));

  }
}

export default Movies;
