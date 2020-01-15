import React,  { Component } from 'react';
import axios from 'axios';

class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie : []
    }

  }

  componentDidMount = () => {
    this.getMovie();
  }

  getMovie () {
   let movieId = this.props.params.id;
  axios.get('http://localhost:3000/api/movies/' + movieId)
        .then(res => {
                      this.setState({movie: res.data}); 
                    });
  }

  
  render() {
    
    const { id, title, runtime, description, genre, rating, votes, year, actor, gross_earning_mil} = this.state.movie;

    return (
      <div className="movie-item">
        <div className="movie-title">
          <p>
           {id}.   { title }
          </p>
        </div>
        <div className="description">
          <p>
            {description}
          </p>
        </div>
        <div className="other-details-movie">
          <div className='attribute-container'>
            <div className='genre'>
              <p>
                Genre: {genre}
              </p>
            </div>

            <div className='rating'>
              <p>
                Rating: {rating}
              </p>
            </div>
          </div>
          <div className='attribute-container'>
              <div className='year'>
                <p>
                  Year: {year}
                </p>
              </div>

              <div className='actor'>
                <p>
                  Actor: {actor}
                </p>
              </div>
          </div>

          <div className='attribute-container'>
              <div className='votes'>
                <p>
                  Votes: {votes}
                </p>
              </div>
              <div className='earning'>
                <p>
                  Earning (Mil): {gross_earning_mil}
                </p>
              </div>
          </div>
        </div>

        <div className="runtime-btn-div">
          <p>
           { runtime } Minutes
          </p>
          <button  style={updatebtnStyle}>Update</button>
        </div>
      </div>
    )

  }

}


const updatebtnStyle = {
  background: 'black',
  color: '#fff',
  border: 'node',
  padding: '5px 10px',
  borderRadius: '10%',
  cursor: 'pointer',
  float: 'left',
}

export default MovieDetails;

