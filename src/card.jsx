import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Card extends Component {








    render() {
        return (

<div className="row">
                <div className="col-lg-2">

                </div>
                <div className="col-lg-8" >
                    <div className="card mt-2" >
                    <img src={'https://static01.nyt.com/images/2017/10/13/movies/GHIBLI-TOTORO/merlin-to-scoop-52128551-51647-articleLarge.jpg'} />
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.director}</h6>
                    <p className="card-text">{this.props.description}</p>
                    </div>
                </div>
                <div class="col-lg-2">

                </div>
            </div>
        );
    }
}

export default Card;


