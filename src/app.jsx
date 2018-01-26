import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import List from './list';
import People from './people';
import logo from './logo.png';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showFilms: false,
            showPeople: false
        };
    }


    showFilms() {
        this.setState({
            showFilms: true,
            showPeople: false
        });
    }

    showPeople() {
        this.setState({
            showPeople: true,
            showFilms: false
        });
    }

    renderPeopleButton() {
        if (!this.state.showPeople) {
            return (
                <button
                    className="btn large btn-primary btn-lg"
                    onClick={() => { this.showPeople(); }}>
                    Load People
                </button>
            );
        }
    }

    renderFilmButton() {
        if (!this.state.showFilms) {
            return (
                <button
                    className="btn large btn-primary btn-lg"
                    onClick={() => { this.showFilms(); }}>
                    Load Films
                </button>
            );
        }
    }

    renderList() {
        if (this.state.showFilms) {
            return <List />;
        } else if (this.state.showPeople) {
            return <People />;
        }
    }

    render() {
        return (
            <div className="container" style={this.style}>
                <img src={logo} alt="logo" />
                <div className="App">
                {this.renderPeopleButton()}
                {this.renderFilmButton()}
                </div>
                <div className="container">
                    {this.renderList()}
                </div>
            </div>
        );
    }

}


export default App;