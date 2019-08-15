import React from 'react';
import {Link} from 'react-router-dom';

const Person = (props) => {
    return (
        <section className="row d-inline justify-content-center w-100">
            <div className="card text-center">
                <div className="card-body bg-dark">
                    <h3 className='text-danger'>Name: {props.person.name} </h3>
                    <Link to={`./people/${props.person.id}`} >Person Details</Link>
                </div>
            </div>
        </section>
    )
}

export default Person;