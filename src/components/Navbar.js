import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navi">
                <NavLink to="/">Home </NavLink>|
                <NavLink to="/dreams/new"> Create a Dream </NavLink>|
                <NavLink to="/dreams/chosen"> Tonight's Dream(s) </NavLink>|
                <NavLink to="/search"> Search for a Dream</NavLink>
            </div>
        )
    }
}