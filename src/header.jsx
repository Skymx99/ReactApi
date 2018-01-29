import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';
import logo from './logo.png';
import styles from './header.css';

class Header extends Component {

    render() {

        return (

            <Fragment>
                <div className="header">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="nav justify-content-center" style={styles.header}>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/films">Films</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/people">People</Link>
                    </li>
                </ul>
            </Fragment>


        )
    }

}

export default Header;

