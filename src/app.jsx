import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';
import List from './list';
import People from './people';
import logo from './logo.png';
import Header from './header';

class App extends Component {


    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        {/* <Route exact path="/" component={Header} /> */}
                        <Route path="/films" component={List} />
                        <Route path="/people" component={People} />
                    </Switch>

                </Fragment>
            </Router>
        );
    }

}


export default App;