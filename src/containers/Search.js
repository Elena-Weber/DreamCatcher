import React from 'react';
import { searchDreams } from '../actions/dreamsActions';
import { connect } from 'react-redux';
import Dream1 from '../components/Dream';

// export default 
class Search extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            description: '',
            chosen: false
        }
    }

    filterByInput = e => {
        let input = e.target.value;
        this.props.searchDreams({value: input})
    }

    handleChange = e => {this.setState({[e.target.name]: e.target.value}); console.log(e.target.value)}

    render() {

        const searched = this.props.searchedDreams.map(( dream, index ) => <Dream1 key={ index } dream={ dream } />)
console.log(searched)
// {debugger}

        return (
            <div className="search">
                <h2>Search is here</h2><br />
                <form>
                    <div>
                        <label htmlFor="search">Start typing to find a dream </label><br /><br />
                        {/* <input type="text" name="search" id="search" onChange={this.handleChange} placeholder="Search for..." /> */}
                        <input type="text" name="search" id="search" onChange={e => {
                                        this.filterByInput(e);
                                    }} placeholder="Search for..." />
                        <div>{ searched }</div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // let value = action.payload.value
    // if (value) {
    //     let filteredValues = state.filter(dream => {
    //         dream.name.toLowerCase().startsWith(value)}
    //     return { searchedDreams: filteredValues }
    // } else {
        return { searchedDreams: state }
}

export default connect(mapStateToProps, { searchDreams })(Search)