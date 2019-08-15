import React, { Component } from 'react';

class FilmDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: {}
        }
    }

    async componentDidMount() {
        let res = await fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
        let film = await res.json();
        this.setState({
            film
        })
    }

    render() {
        return (
            <div className='border border-dark shadow p-2 text-center my-2 bg-danger mx-5'>
                <h3 className='text-dark'>Description:</h3>
                <p className='text-white'>{this.state.film.description}</p>
                <h3 className='text-dark'>Director:</h3>
                <p className='text-white'>{this.state.film.director}</p>
                <h3 className='text-dark'>Producer:</h3>
                <p className='text-white'>{this.state.film.producer}</p>
                <h3 className='text-dark'>Rating:</h3>
                <p className='text-white'>{this.state.film.rt_score}</p>
            </div>
        )
    }
}



export default FilmDetails;