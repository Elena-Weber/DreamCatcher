import React from 'react';
import { connect } from 'react-redux';
import { removeDream } from '../actions/dreamsActions';
//import { updateDream } from '../actions/dreamsActions';

const Dream = ({ dream, removeDream }) => {

    return (
        <div className="dreamsDiv">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h3 className="dreamName">Name: {dream.name}</h3>
                    </div>
                    <div className="flip-card-back">    
                        <p>Description: {dream.description}</p><br />
                        <div><button>Dream it</button></div><br />
                        <div><button>Edit</button>   <button onClick={()=>removeDream(dream.id)}>Delete</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { removeDream })(Dream)