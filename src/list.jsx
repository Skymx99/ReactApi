import React, { Component } from 'react';
import Card from './card';



class List extends Component {

    constructor(props) {
        super()
        this.state = {
            films: [],
            hasLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    films: [...data]
                });
            });
    }




    hasLoaded() {
        this.setState({
            hasLoaded: !this.state.hasLoaded
        });
    }

    render() {
        if (this.state.hasLoaded === true) {
            return (
                <div className="container">
                    <div className="container-head">

                        <button
                            className="btn btn-primary btn-lg btn-block"
                            onClick={() => this.hasLoaded()}
                        >Show Films</button>
                    </div>
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

        else {
            return (
                <div className="container">

                    <button
                        className="btn btn-primary btn-lg btn-block"
                        onClick={() => this.hasLoaded()}
                    >Show Films</button>
                </div>
            );
        }
    };

}









export default List;
