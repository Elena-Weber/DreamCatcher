import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="foot">
            <div>
                <h1 className="mainHeading"><NavLink to="/">DreamCatcher</NavLink> - the world's first workshop for dreams 😴</h1>
            </div>
        </div>
    )
}
export default Home

// export default class Home extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1 className="mainHeading"><NavLink to="/">DreamCatcher</NavLink> - the world's first workshop (make yourself a little dream tonight...) 😴</h1>
//             </div>
//         )
//     }
// }