import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="foot">
                <h3><NavLink to="/">@DreamCatcher 2021</NavLink> - Welcome to the world of all possible</h3>
            </div>
        )
    }
}