import React, { Component } from 'react';
import Card from './card';
import 'isomorphic-fetch';
import 'es6-promise';



class List extends Component {

    constructor(props) {
        super()
        this.state = {
            films: [],

        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    films: data
                });
            });
    }






    render() {

            return (
                <div className="container">

                    <div className="row">
                        {this.state.films.map((film, index) => {
                            return (
                                <div key={index} className="col-12">
                                    <Card title={film.title} director={film.director} description={film.description} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }

    }









export default List;
