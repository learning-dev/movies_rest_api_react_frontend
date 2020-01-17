import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



class AddMovie extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title : '',
        description: '',
        runtime: '',
        rating: '',
        genre: '',
        metascore: '',
        votes: '',
        gross_earning_mil: '',
        director_id: '',
        actor: '',
        year: ''
      } 
      
      this.onChange = this.onChange.bind(this);
      this.onMovieSubmit = this.onMovieSubmit.bind(this);
    }
    

    onMovieSubmit(event) {
      event.preventDefault();
      let dataToSend = JSON.stringify(this.state);
      fetch('http://localhost:3000/api/movies/', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors', 
        body: dataToSend
      })
      .then((res) =>{
          if(res.ok)
            return res.json()       
        })
      .then((datajson ) => {
          console.log(datajson);
          this.props.history.push('/movies'); 
      });     
    }
    onChange(event) {
      this.setState({[event.target.name]: event.target.value })
    }

    render() {
      return (
        <form className="form-container" onSubmit={this.onMovieSubmit}>
          <div className="field-container">
            <label>Title:</label>
            <input type="text" name='title' placeholder='Title' className='input-textbox' onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Description:</label>
            <textarea type="text" name='description' placeholder='Description' className='input-textarea' onChange={this.onChange}></textarea>
          </div>
          <div className="field-container">
            <label>Runtime:</label>
            <input type="text" name='runtime' placeholder='Runtime in mins' className='input-textbox' onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Rating:</label>
            <input type="text" name='rating' placeholder='Rating (out of 10)' className='input-textbox' onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Genre:</label>
            <input type="text" name='genre' placeholder='Genre' className='input-textbox' onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Metascore:</label>
            <input type="text" name='metascore' placeholder='Metascore (out of 100)' className='input-textbox' onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Votes:</label>
            <input type="text" name='votes' placeholder='No of Votes' className='input-textbox' onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Gross Earning:</label>
            <input type="text" name='gross_earning_mil' placeholder='Earning in (Millions)' className='input-textbox' onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Director ID:</label>
            <input type="text" name='director_id' placeholder='ID in director table' className='input-textbox' onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Actor:</label>
            <input type="text" name='actor' placeholder='Actor' className='input-textbox' onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Year:</label>
            <input type="text" name='year' placeholder='Year (YYYY)' className='input-textbox' onChange={this.onChange}/>
          </div>
          <div className='div-submit'>
            <input type="submit" value="Add" className='submit-btn' onSubmit={this.onMovieSubmit} />
          </div>
        </form>
      )
    }
}




export default  withRouter(AddMovie);

