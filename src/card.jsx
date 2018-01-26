import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Card extends Component {

    constructor(props) {
        super(props)
        this.styles = {
            margin: '2px',
            float: 'left',
        };

    }






    render() {
        return (
            <div className="card" style={this.styles}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.director}</h6>
                    <p className="card-text">{this.props.description}</p>

                </div>
            </div>
        );
    }
}

export default Card;