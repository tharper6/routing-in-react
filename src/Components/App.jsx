import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Films from './Films';
import People from './People';
import FilmDetails from './FilmDetails';
import PersonDetails from './PersonDetails';

class App extends Component {

render() {
    return(
        <Router>
            <>
                <section className='row justify-content-around border border-dark shadow p-1' >
                    <Link to='/' className='btn btn-primary' >Go Home</Link>
                    <Link to='/films' className='btn btn-primary'>View Films</Link>
                    <Link to='/people' className='btn btn-primary'>View People</Link>
                </section>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/films' component={Films} />
                    <Route exact path='/people' component={People} />
                    <Route exact path='/films/:id' component={FilmDetails} />
                    <Route exact path='/people/:id' component={PersonDetails} />
                </Switch>
            </>
        </Router>
    )
}

}

export default App;