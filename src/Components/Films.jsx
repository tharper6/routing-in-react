import React, { Component } from 'react';
import Film from './Film'

class Films extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: []
        }
    }

    async componentDidMount() {
        let filmRes = await fetch("https://ghibliapi.herokuapp.com/films")
        let filmData = await filmRes.json();
        this.setState({
            films: filmData
        })
    }


    render() {
        return (
            <main className="container">
                {this.state.films.map(film => {
                    return (
                        <Film film={film} key={film.id} />
                    )
                })}
            </main>
        )
    }

}

export default Films;