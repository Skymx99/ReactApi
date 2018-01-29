import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class PeopleCard extends Component {








    render() {
        return (

            <div className="row">
                <div className="col-lg-2">

                </div>
                <div className="col-lg-8">
                    <div className="card mt-2"  >
                        <h5 className="card-title">{this.props.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.age}</h6>
                        <p className="card-text">{this.props.gender}</p>
                        <a href={this.props.url} target="blank" className="card-link"> JSON Response </a>
                    </div>
                </div>
                <div class="col-lg-2">

                </div>
            </div>

        );
    }
}

export default PeopleCard;