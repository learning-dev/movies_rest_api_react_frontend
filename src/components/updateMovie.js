import React, { Component } from 'react';
import axios from 'axios';


class UpdateMovie extends Component {
    constructor(props) {
      super(props)
      this.state = {
        movie: []
      } 
      
      this.onChange = this.onChange.bind(this);
      this.onMovieSubmit = this.onMovieSubmit.bind(this);
    }
    
    componentDidMount = () => {
      this.getMovie();
    }
  
    getMovie () {
     let movieId = this.props.params.id;
     console.log(movieId);
    axios.get('http://localhost:3000/api/movies/' + movieId)
          .then(res => {
                        this.setState({movie: res.data});
                        console.log('state',this.state.movie) 
                        
                      });
    }

    onMovieSubmit(event) {
      event.preventDefault();
      console.log('insdie', this.state.movie);
      let dataToSend = JSON.stringify(this.state.movie);
      console.log('submitting movie')
      fetch('http://localhost:3000/api/movies/'+ this.state.movie.id, {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors', 
        body: dataToSend
      })
      .then((res) =>{
          let json = res.json();
          console.log(json);
          if(res.ok)
            return json;       
        })
      .then((datajson ) => {
          console.log(datajson);
          
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
            <input type="text" name='title' placeholder='Title' className='input-textbox' value={this.state.movie.title}   onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Description:</label>
            <textarea type="text" name='description' placeholder='Description' value={this.state.movie.description} className='input-textarea'  onChange={this.onChange}></textarea>
          </div>
          <div className="field-container">
            <label>Runtime:</label>
            <input type="text" name='runtime' placeholder='Runtime in mins' value={this.state.movie.runtime} className='input-textbox'  onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Rating:</label>
            <input type="text" name='rating' placeholder='Rating (out of 10)' value={this.state.movie.rating} className='input-textbox'  onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Genre:</label>
            <input type="text" name='genre' placeholder='Genre'  value={this.state.movie.genre} className='input-textbox'  onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Metascore:</label>
            <input type="text" name='metascore' placeholder='Metascore (out of 100)' value={this.state.movie.metascore} className='input-textbox'  onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Votes:</label>
            <input type="text" name='votes' placeholder='No of Votes' value={this.state.movie.votes} className='input-textbox'  onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Gross Earning:</label>
            <input type="text" name='gross_earning_mil' placeholder='Earning in (Millions)' value={this.state.movie.gross_earning_mil} className='input-textbox'  onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Director ID:</label>
            <input type="text" name='director_id' placeholder='ID in director table' value={this.state.movie.director_id} className='input-textbox'  onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Actor:</label>
            <input type="text" name='actor' placeholder='Actor' value={this.state.movie.actor} className='input-textbox'  onChange={this.onChange}/>
          </div>
          <div className="field-container">
            <label>Year:</label>
            <input type="text" name='year' placeholder='Year (YYYY)' value={this.state.movie.year} className='input-textbox'  onChange={this.onChange}/>
          </div>
          <div className='div-submit'>
            <input type="submit" value="Add" className='submit-btn' onSubmit={this.onMovieSubmit} />
          </div>
        </form>
      )
    }
}




export default UpdateMovie;

