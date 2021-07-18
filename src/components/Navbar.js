import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navi">
            <NavLink to="/">All dreams </NavLink>|
            <NavLink to="/dreams/new"> Create a new Dream </NavLink>|
            <NavLink to="/dreams/chosen"> Tonight's Dream(s)</NavLink>
        </div>
    )
}
export default Navbar