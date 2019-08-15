import React from 'react';
import {Link}  from 'react-router-dom'

const Film = (props) => {
    return (
        <section className="row justify-content-center">
            <div className="card text-center col-md-10 p-0">
                <div className="card-body bg-dark">
                    <h3 className='text-danger' >Title: {props.film.title} </h3>
                    <Link to={`/films/${props.film.id}`} > Get Film Details </Link>
                </div>
            </div>
        </section>
    )
}

export default Film