import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

class Movies extends Component {

  state = {
      movies : []
    }


  componentDidMount = () => {
    this.getAllMovies();
  }

  getAllMovies() {
  axios.get('http://localhost:3000/api/movies/').then(res => {this.setState({movies: res.data}); });
  }

  delMovies(id) {
    axios.delete('http://localhost:3000/api/movies/'+id)
        .then( res => {
          if(res.status === 200) {
            axios.get('http://localhost:3000/api/movies/').then( getReq => {
            this.setState({movies: getReq.data})
            })
          }
        });
  }

  
  // updateChange(newState) {

  //     if( newState.length > 0 &&(JSON.stringify(newState) !== JSON.stringify(this.movies)) ) {
  //       console.log('newstate', newState)
  //       console.log(JSON.stringify(this.state))
  //       this.setState({movies: [...newState]});
  //     }
  // }

  render() {
    return this.state.movies.map((movie) =>(
      <MovieItem key={movie.id} movie={movie} delMovies = {this.delMovies}  />
    ));
  }
}

// Movies.PropTypes = {
//   movies : PropTypes.array.isRequired
// }
export default Movies;
