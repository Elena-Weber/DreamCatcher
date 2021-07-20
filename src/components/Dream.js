import React from 'react';
import { connect } from 'react-redux';
import { removeDream } from '../actions/dreamsActions';
import { updateDream } from '../actions/dreamsActions';
import { NavLink } from 'react-router-dom';
// import { toggleDream } from '../actions/dreamsActions';

// class Dream extends React.Component {
//     constructor() {
//         super()
    
//         this.state = {
//                 id: '',
//                 name: '',
//                 description: '',
//                 chosen: false
//             }
//     }
const Dream = ({ dream, removeDream, updateDream }) => {
//     toggleDream = e => {this.setState()}
// render() { console.log(this.props)

    return (
        <div className="dreams-card">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h3 className="dreamName">{dream.name}</h3>
                    </div>
                    <div className="flip-card-back">    
                        <p>{dream.description}</p>
                        {/* <div>
                            <button onClick={()=>toggleDream(dream)}>{!dream.chosen ? "Dream it!" : "You're dreaming it. Cancel?"}</button>
                        </div> */}
                        <br />
                        <div>
                            <NavLink to={`/dreams/${dream.id}/update`}><button onClick={()=>updateDream(dream)}>Edit</button></NavLink>
                            <button onClick={()=>removeDream(dream.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = (state, dreamId) => {
//     const id = parseInt(dreamId.match.params.id)
//     return { dream: state.find(dream => dream.id === id) }
// }
// export default connect(mapStateToProps, {removeDream, updateDream, toggleDream})(Dream)

export default connect(null, { removeDream, updateDream })(Dream)