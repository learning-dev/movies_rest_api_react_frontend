import React, { Component } from 'react';
import PropTypes  from 'prop-types';


class MovieItem extends Component {
  
  render( ) {
    const { id, title, runtime, description} = this.props.movie;
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
        <div className="runtime-btn-div">
          <p>
           { runtime } Minutes
          </p>
          <button  style={updatebtnStyle}>Update</button>
          <button onClick={this.props.delMovies.bind(this, id)} style={btnStyle}>Delete</button>
        </div>
      </div>
    );
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'node',
  padding: '5px 10px',
  borderRadius: '10%',
  cursor: 'pointer',
  float: 'right',
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

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieItem;


