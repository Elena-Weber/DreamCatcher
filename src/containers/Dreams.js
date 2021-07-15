import React, { Component } from 'react';
//import Dream from '../components/Dream';
import Dream1 from '../components/Dream1';
import { connect } from 'react-redux';
import { fetchDreams } from '../actions/dreamsActions';

class Dreams extends Component {

    componentDidMount(){
        this.props.fetchDreams()
    }

    render() {
        if (this.props.dreams) {

    const dreams = this.props.dreams.map(( dream, index ) => <Dream1 key={ index } dream={ dream } />)
    let reverseDreams = dreams.reverse()

//{debugger}
        return (
            <div>
                <h2 className="dream-heading">All your custom-made dreams are here. Enjoy!</h2>
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