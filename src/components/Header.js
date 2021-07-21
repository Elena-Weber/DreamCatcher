import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className="mainHeading"><NavLink to="/">DreamCatcher</NavLink> - the world's first workshop for dreams 😴</h1>
        </div>
    )
}

export default Header;