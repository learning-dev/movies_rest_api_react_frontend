import React, { Component } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';


class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : []
    }
    this.getAllMovies = this.getAllMovies.bind(this);
    this.delMovies = this.delMovies.bind(this);
  }

  componentDidMount = () => {
    this.getAllMovies();
  }

  getAllMovies () {
  axios.get('http://localhost:3000/api/movies/').then(res => {this.setState({movies: res.data}); });
  }

  delMovies(id) {
    axios.delete('http://localhost:3000/api/movies/'+id)
        .then( res => {
          if(res.status === 200) {
            this.getAllMovies();
          }
        });
  }


  render() {
    return this.state.movies.map((movie) =>(
      <MovieItem key={movie.id} movie={movie} delMovies = {this.delMovies}  />
    ));
  }
}


export default Movies;
