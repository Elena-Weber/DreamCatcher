import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { removeDream } from '../actions/dreamsActions';
// import { updateDream } from '../actions/dreamsActions';

// const Dream = ({ dream, removeDream, updateDream }) => {
    const Dream = (dream) => { console.log(dream.dream.name)
    return (
        <div className="dreams-card">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h3 className="dreamName">{dream.dream.name}</h3>
                    </div>
                    <div className="flip-card-back">    
                        <p>{dream.dream.description}</p>
                        <br />
                        {/* <div>
                            <NavLink to={`/dreams/${dream.id}/update`}><button onClick={()=>updateDream(dream)}>Edit</button></NavLink>
                            <button onClick={()=>removeDream(dream.id)}>Delete</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default connect(null, { removeDream, updateDream })(Dream);
export default Dream;