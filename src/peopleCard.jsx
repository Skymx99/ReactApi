import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class PeopleCard extends Component {

    constructor(props) {
        super(props)
        this.styles = {
            width: '895px',
            margin: '2px',
            float: 'left',

        };

    }






    render() {
        return (
            <div className="card" style={this.styles}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.age}</h6>
                    <p className="card-text">{this.props.gender}</p>
                    <a href={this.props.url} target="blank" className="card-link"> JSON Response </a>

                </div>
            </div>
        );
    }
}

export default PeopleCard;