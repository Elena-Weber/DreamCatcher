import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <h1 className="mainHeading"><NavLink to="/">DreamCatcher</NavLink> - the world's first workshop for dreams 😴</h1>
            </div>
        </div>
    )
}
export default Header