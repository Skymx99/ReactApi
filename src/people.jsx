import React, { Component } from 'react';
import PeopleCard from './peopleCard';



class People extends Component {

    constructor(props) {
        super()
        this.state = {
            people: [],
            hasLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    people: [...data]
                });
            });
    }




    // hasLoaded() {
    //     this.setState({
    //         hasLoaded: !this.state.hasLoaded
    //     });
    // }

    render() {

            return (
                <div className="container">

                    <div className="row">
                        {this.state.people.map((person, index) => {
                            return (
                                <div key={index} className="col-12">
                                    <PeopleCard name={person.name} age={person.age} gender={person.gender} url={person.url} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }




}









export default People;
