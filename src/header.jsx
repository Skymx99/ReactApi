import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';
import logo from './logo.png';

class Header extends Component {

    render() {

        return (

            <Fragment>
                <div className="container">
                    <img src={logo} alt="logo" />
                </div>
                <Link
                    className="btn large btn-primary btn-lg btn-block"
                    to="/">Home</Link>
                <Link
                    className="btn large btn-primary btn-lg btn-block"
                    to="/films">Films</Link>
                <Link
                    className="btn large btn-primary btn-lg btn-block"
                    to="/people">People</Link>
            </Fragment>


        )
    }

}

export default Header;