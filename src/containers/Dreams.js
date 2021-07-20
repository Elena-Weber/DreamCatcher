import React, { Component } from 'react';
import Dream from '../components/Dream';
import { connect } from 'react-redux';
import { fetchDreams } from '../actions/dreamsActions';
import Search from '../components/Search';

class Dreams extends Component {

    constructor() {
        super()
    
        this.state = {
                id: '',
                name: '',
                description: '',
                chosen: false,
                term: ""
            }
    }

    componentDidMount(){
        this.props.fetchDreams()
    }
    
    searchDreams = (term) => {
        this.setState({
            // ???
            term: term 
        })
    }

    filterIt = () => {
        let lowerStateTerm = this.state.term.toLowerCase()
        let filteredDreams = this.props.dreams.filter(dream => dream.name.toLowerCase().includes(lowerStateTerm)
        )
        let updatedDreams = filteredDreams.reverse()
        console.log(filteredDreams)
        return (updatedDreams.map( (dream, index) => { return <Dream dream={dream} key={index} /> }))
        // return (filteredDreams.map( (dream, index) => { return <Dream dream={dream} key={index} /> }))
    } 

    render() { console.log(this.state.term)

    // const dreams = this.props.dreams.map(( dream, index ) => <Dream key={ index } dream={ dream } />)
    // let reverseDreams = dreams.reverse()

//{debugger}
        return ( 
            <>
                <div className="search">
                < Search searchTermProp={this.state.term} search={this.searchDreams} />
                </div>
                <div>
                <h2 className="dream-heading">All your custom-made dreams are here. Enjoy!</h2>
                {/* <div className="dreams">{ dreams }</div> */}
                <div className="dreams">{this.filterIt()}</div>
                {/* <div className="dreams">{ reverseDreams }</div> */}
                </div>
            </>
        )
    }
}

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

// export default Dreams
export default connect(mapStateToProps, { fetchDreams })(Dreams)
// export default connect(mapStateToProps, dispatchToProps)(Dreams)