import React from 'react';
import { connect } from 'react-redux';
import { removeDream } from '../actions/dreamsActions';
import { toggleDream } from '../actions/dreamsActions';
import { NavLink } from 'react-router-dom';

const Dream = ({ dream, removeDream, toggleDream }) => {

    const handleEdit = (dream) => {console.log(dream)
        //let dreamId = dream.id
        //setState({
            //dreamId: dream.id
        //})
    }

    return (
        <div className="dreams-card">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h3 className="dreamName">Name: {dream.name}</h3>
                    </div>
                    <div className="flip-card-back">    
                        <p>Description: {dream.description}</p><br />
                        <div>
                            <button onClick={()=>toggleDream(dream.id)}>{!dream.chosen ? "Dream it!" : "You're dreaming it. Cancel?"}</button></div><br />
                        {/* <div><button>{!dream.chosen ? "Dream it!" : "You're dreaming it. Cancel?"}</button></div><br /> */}
                        <div>
                            <NavLink to="/dreams/update"><button onClick={()=>handleEdit(dream)}>Edit</button></NavLink>  <button onClick={()=>removeDream(dream.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { removeDream, toggleDream })(Dream)