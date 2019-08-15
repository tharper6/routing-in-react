import React, {Component} from 'react';
import Person from './Person'

class People extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: []
        }
    }

    async componentDidMount() {
        let res = await fetch("https://ghibliapi.herokuapp.com/people");
        let data = await res.json();
        this.setState({
            people: data
        })
    }
    

render() {
    return(
        <main className="container">
            {this.state.people.map(person => {
                return(
                    <Person person={person} key={person.id} />
                )
            })}
        </main>
    )
}

}

export default People