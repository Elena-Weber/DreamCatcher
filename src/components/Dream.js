import React from 'react';
import { connect } from 'react-redux';
import { removeDream } from '../actions/dreamsActions';
import { updateDream } from '../actions/dreamsActions';
import { NavLink } from 'react-router-dom';

const Dream = ({ dream, removeDream, updateDream }) => {

    return (
        <div className="dreams-card">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h3 className="dreamName">{dream.name}</h3>
                    </div>
                    <div className="flip-card-back">    
                        <p>{dream.description}</p>
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

export default connect(null, { removeDream, updateDream })(Dream)