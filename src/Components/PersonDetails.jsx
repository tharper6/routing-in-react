import React, {Component} from 'react';

class PersonDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Person: {}
        }
    }

    async componentDidMount () {
        let res = await fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
        let data = await res.json();
        this.setState({
            Person: data
        })
    }

    render() {
        return(
            <div className='border border-dark shadow p-2 text-center my-2 bg-warning mx-5'>
                <h3 className='text-dark'>Gender</h3>
                <p className='text-white'>{this.state.Person.gender}</p>
                <h3 className='text-dark'>Age</h3>
                <p className='text-white'>{this.state.Person.age}</p>
                <h3 className='text-dark'>Hair Color:</h3>
                <p className='text-white'>{this.state.Person.hair_color}</p>
            </div>
        )
    }


}

export default PersonDetails;