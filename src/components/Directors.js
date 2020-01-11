import React, { Component } from 'react';
import axios from 'axios';
import DirectorItem from './DirectorItem';
class Directors extends Component {
  
  state = {
    directors: []
  }
  componentDidMount() {
    this.getAllDirectors();
  }

  getAllDirectors(){
    axios.get('http://localhost:3000/api/directors/')
        .then((res) => {
          this.setState({directors: res.data});
          console.log(this.state.directors);
        });
  }
  
  render() {
    
    return this.state.directors.map((director) => (
      <DirectorItem key={director.id} director={director} delMovies = {this.delDirector}  />
          ));
    
  }

}
export default Directors;
