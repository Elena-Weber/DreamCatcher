import React from 'react';
import { connect } from 'react-redux';
import { removeDream } from '../actions/dreamsActions';
import { toggleDream } from '../actions/dreamsActions';
import { NavLink } from 'react-router-dom';

class Dream extends React.Component {
    constructor() {
        super()

        const handleEdit = (dream) => {console.log(dream)
            let dreamId = dream.id
            console.log(dreamId)
            this.setState({
                dreamId: dream.id
            })
            console.log(dream)
        }
    }
        render(dream, removeDream, toggleDream) {

        return (
            <div className="dreams-card">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <h3 className="dreamName">Name: {this.props.dream.name}</h3>
                        {/* <h3 className="dreamName">Name: {dream.name}</h3> */}
                        </div>
                        <div className="flip-card-back">    
                            <p>Description: {this.props.dream.description}</p><br />
                            <div>
                            <button onClick={()=>toggleDream(this.props.dream.id)}>{!this.props.dream.chosen ? "Dream it!" : "You're dreaming it. Cancel?"}</button></div><br />
                            {/* <div><button>{!dream.chosen ? "Dream it!" : "You're dreaming it. Cancel?"}</button></div><br /> */}
                            <div>
                                <NavLink to="/dreams/update"><button onClick={()=>this.handleEdit(this.props.dream)}>Edit</button></NavLink>  <button onClick={()=>removeDream(this.props.dream.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { removeDream, toggleDream })(Dream)