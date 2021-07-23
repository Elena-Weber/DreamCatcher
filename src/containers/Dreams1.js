// THIS IS A DREAMS RENDERING CONTAINER WITHOUT THUNK

import React, { Component } from 'react';
import Dream from '../components/Dream';
import { fetchDreams } from '../actions/dreamsActions';
import { connect } from 'react-redux';

class Dreams1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                id: '',
                name: '',
                description: ''
            }
    }

    componentDidMount(){
        console.log("Component did mount")
        this.props.dreams();
        setTimeout(() => {
            console.log("TIMEOUT", this.props.allDreams)
        }, 5000)
    }

    render() { console.log("We are in dreams render, state:", this.props.allDreams)
    let dreamsArray = this.props.allDreams.map( (dream, index) => { return <Dream dream={dream} key={index} /> })
        return (
            <div>
                <h1 className="dream-heading">Dreams are supposed to be here</h1>
                <div className="dreams">{dreamsArray}</div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { 
        allDreams: state
    }
}
const mapDispatchToProps = dispatch => {
    console.log("mapDispatchToProps")
    return {
        dreams: fetchDreams(dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dreams1);