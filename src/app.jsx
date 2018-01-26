import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import List from './list';
import People from './people';
import logo from './logo.png';

class App extends Component {


    render() {
        return (
            <div className="container" style={this.style}>
                <img src={logo} alt="logo" />
                <div className="App">
                    <List />
                    <People />
                </div>
            </div>
        );
    }

}


export default App;