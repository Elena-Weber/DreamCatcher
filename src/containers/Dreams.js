import React, { Component } from 'react';
import Dream from '../components/Dream';
import { connect } from 'react-redux';
import { fetchDreams } from '../actions/dreamsActions';
import Search from '../components/Search';
import Filtering from '../components/Filtering';

class Dreams extends Component {

    constructor() {
        super()
    
        this.state = {
                id: '',
                name: '',
                description: '',
                chosen: false,
                term: "",
                sort: 'None'
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
        // let reversedDreams = filteredDreams.reverse()
        console.log(filteredDreams)

        switch(this.state.sort){
            case "Alphabetically":
                return filteredDreams.sort((a,b) => a.name > b.name ? 1 : -1).map( (dream, index) => { return <Dream dream={dream} key={index} /> })
            case "ReverseAlphabetically":
                return filteredDreams.sort((a,b) => a.name > b.name ? 1 : -1).reverse().map( (dream, index) => { return <Dream dream={dream} key={index} /> })    
            case "CreationOld":
                return filteredDreams.map( (dream, index) => { return <Dream dream={dream} key={index} /> })
            case "CreationYoung":
                return filteredDreams.reverse().map( (dream, index) => { return <Dream dream={dream} key={index} /> })    
            default:
                return filteredDreams.map( (dream, index) => { return <Dream dream={dream} key={index} /> })
        }

        // return (reversedDreams.map( (dream, index) => { return <Dream dream={dream} key={index} /> }))
        // return (filteredDreams.map( (dream, index) => { return <Dream dream={dream} key={index} /> }))
    } 

    updateSort = sortBy => {
        console.log("HELLO FROM DREAMS")
        this.setState({ sort: sortBy })
        console.log(this.state)
    }
    // displayDreams = () => {
    //     let sortedDreams = [...this.state]
    //     switch(this.state.sort){
    //         case "Alphabetically":
    //             return sortedDreams.sort((a,b) => a.name > b.name ? 1 : -1)
    //         case "Price":
    //             return sortedDreams.sort((a,b) => a.price > b.price ? 1 : -1)
    //         default:
    //             return sortedDreams
    //     }
    // }

    render() { console.log(this.state.term)

    // const dreams = this.props.dreams.map(( dream, index ) => <Dream key={ index } dream={ dream } />)
    // let reverseDreams = dreams.reverse()

//{debugger}
        return ( 
            <>
                <div className="search">
                <Search searchTermProp={this.state.term} search={this.searchDreams} />
                </div>
                <div className="filtering">
                <Filtering sort={this.state.sort} updateSort={this.updateSort} />
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

export default connect(mapStateToProps, { fetchDreams })(Dreams)