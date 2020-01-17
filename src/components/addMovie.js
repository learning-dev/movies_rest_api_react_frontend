import React, { Component } from 'react';

class AddMovie extends Component {
    state = {
      newMovie: {}
    }
    render() {
      return (
        <form className="form-container">
          <div className="field-container">
            <label>Title:</label>
            <input type="text" name='title' placeholder='Title' className='input-textbox'/>
          </div>
          <div className="field-container">
            <label>Description:</label>
            <textarea type="text" name='description' placeholder='Description' className='input-textarea'></textarea>
          </div>
          <div className="field-container">
            <label>Runtime:</label>
            <input type="text" name='runtime' placeholder='Runtime in mins' className='input-textbox'/>
          </div>
          <div className="field-container">
            <label>Rating:</label>
            <input type="text" name='rating' placeholder='Rating (out of 10)' className='input-textbox'/>
          </div>
          <div className="field-container">
            <label>Genre:</label>
            <input type="text" name='genre' placeholder='Genre' className='input-textbox'/>
          </div>
          <div className="field-container">
            <label>Metascore:</label>
            <input type="text" name='title' placeholder='Metascore' className='input-textbox'/>
          </div>
          <div className="field-container">
            <label>Votes:</label>
            <input type="text" name='title' placeholder='Votes' className='input-textbox'/>
          </div>
          <div className="field-container">
            <label>Gross Earning:</label>
            <input type="text" name='title' placeholder='Gross Earning' className='input-textbox'/>
          </div>
          <div className="field-container">
            <label>Director ID:</label>
            <input type="text" name='title' placeholder='Director ID' className='input-textbox'/>
          </div>
          <div className="field-container">
            <label>Actor:</label>
            <input type="text" name='title' placeholder='Actor' className='input-textbox'/>
          </div>
          <div className="field-container">
            <label>Year:</label>
            <input type="text" name='title' placeholder='Year' className='input-textbox'/>
          </div>
          <div className='div-submit'>
            <input type="submit" value="Add" className='submit-btn' />
          </div>
        </form>
      )
    }
}




export default AddMovie;

