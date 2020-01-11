import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieItem from './MovieItem';

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
