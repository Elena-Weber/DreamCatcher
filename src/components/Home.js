import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="mainHeading"><NavLink to="/">DreamCatcher</NavLink> - your best workshop for dreams (make yourself a little dream tonight...) 😴</h1>
            </div>
        )
    }
}