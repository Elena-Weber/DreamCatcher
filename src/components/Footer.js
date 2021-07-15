import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
        return (
            <div className="foot">
                <h3><NavLink to="/">@DreamCatcher 2021</NavLink> - Welcome to the world of all possible</h3>
            </div>
        )
}
export default Footer


// export default class Footer extends React.Component {
//     render() {
//         return (
//             <div className="foot">
//                 <h3><NavLink to="/">@DreamCatcher 2021</NavLink> - Welcome to the world of all possible</h3>
//             </div>
//         )
//     }
// }