import React, { Component } from 'react';
import Dream from '../components/Dream'
import { connect } from 'react-redux';
import { fetchDreams } from '../actions/dreamsActions';

//export 
class Dreams extends Component {

    componentDidMount(){
        this.props.fetchDreams()
    }

    render() {
        if (this.props.dreams) {

    const dreams = this.props.dreams.map(( dream, index ) => <Dream key={ index } dream={ dream } />)
    
//{debugger}
        return (
            <div className="dreams">
                <h3>Dreams are here</h3>
                { dreams }
            </div>
        )
    } else {console.log(this.props)
    return (
        <div className="dreams">
            <h3>Dreams are (NOT) loading here</h3>
        </div>
    )
    }
}}

const mapStateToProps = state => {
    return {
        dreams: state.dreams,
    }
}

const dispatchToProps = dispatch => {
    return {
        fetchDreams: () => dispatch(fetchDreams())
    }
}

// export default connect(mapStateToProps, { fetchDreams })(Dreams)
export default connect(mapStateToProps, dispatchToProps)(Dreams)