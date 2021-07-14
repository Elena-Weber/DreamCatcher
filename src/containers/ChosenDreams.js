import React, { Component } from 'react';
//import Dreams from './Dreams';
import Dream from '../components/Dream'
import { connect } from 'react-redux'

class ChosenDreams extends Component {
    render() {console.log(this.props)
        //{debugger}
        const chosen = this.props.chosenDreams.map(( dream, index ) => <Dream key={ index } dream={ dream } />)
        return (
            <div>
                <h2 className="dreamName">Tonight you're gonna be dreaming about</h2>
                <div className="dreams">{ chosen }</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        chosenDreams: state.filter(dream => dream.chosen)
    }
}
//export default ChosenDreams
export default connect(mapStateToProps)(ChosenDreams)