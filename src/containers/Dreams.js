import React, { Component } from 'react';
import Dream from '../components/Dream'
import { connect } from 'react-redux';
import { fetchDreams } from '../actions/dreamsActions';

class Dreams extends Component {

    componentDidMount(){
        this.props.fetchDreams()
    }

    render() {
        if (this.props.dreams) {

    const dreams = this.props.dreams.map(( dream, index ) => <Dream key={ index } dream={ dream } />)
    let reverseDreams = dreams.reverse()

//{debugger}
        return (
            <div>
                <h3 className="dream-heading">Dreams are here</h3>
                {/* <div className="dreams">{ dreams }</div> */}
                <div className="dreams">{ reverseDreams }</div>
            </div>
        )
    } else {console.log(this.props)
    return (
        <div>
            <h3>Dreams are (NOT) loading here</h3>
        </div>
    )
    }
}}

const mapStateToProps = state => {
    return {
        dreams: state,
    }
}

// const dispatchToProps = dispatch => {
//     return {
//         fetchDreams: () => dispatch(fetchDreams())
//     }
// }

export default connect(mapStateToProps, { fetchDreams })(Dreams)
// export default connect(mapStateToProps, dispatchToProps)(Dreams)