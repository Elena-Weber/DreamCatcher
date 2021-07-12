import React, { Component } from 'react';
import Dreams from './Dreams';
import { connect } from 'react-redux'

class ChosenDreams extends Component {
    render() {
        return (
            <div>
                <h3>Tonight's Dream(s)</h3>
                <Dreams dreams={this.props.chosenDreams} dispatch={this.props.dispatch}
                />
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