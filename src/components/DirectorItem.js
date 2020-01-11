import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DirectorItem extends Component {
 

    render() {
      const { id} = this.props.director;
      const directorName = this.props.director.director_name;

      return (
        <div className="director-item">
          <div className="director-name">
            <p>
              {id}.  { directorName }
            </p>
          </div>
          <div className="runtime-btn-div">
            <button  style={updatebtnStyle}>Update</button>
            <button  style={btnStyle}>Delete</button>
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

DirectorItem.propTypes = {
  director: PropTypes.object.isRequired
}

export default DirectorItem;
