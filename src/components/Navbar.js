import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            // <nav>
            <div className="navi">
                <h2>DreamCatcher, your best workshop for dreams - you know what you'll do tonight</h2>
                <NavLink to="/dreams">Home </NavLink>|
                <NavLink to="/dreams/new"> Create a Dream </NavLink>|
                <NavLink to="/dreams/chosen"> Tonight's Dream(s) </NavLink>|
                <NavLink to="/search"> Search for a Dream</NavLink>
            </div>
            // </nav>
        )
    }
}