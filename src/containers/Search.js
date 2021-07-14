import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            description: '',
            chosen: false
        }
    }

    handleChange = e => {this.setState({[e.target.name]: e.target.value}); console.log(e.target.value)}
    
    render() {
        return (
            <div className="search">
                <h2>Search is here</h2><br />
                <form>
                    <div>
                        <label htmlFor="search">Start typing to find a dream </label><br /><br />
                        <input type="text" name="search" id="search" onChange={this.handleChange} placeholder="Search for..." />
                    </div>
                    
                </form>
            </div>
        )
    }
}
