import React, { Component } from 'react';
import { addDream } from '../actions/dreamsActions';
import { connect } from 'react-redux';

class DreamNew extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            description: ''
        }
    }
    
    handleChange = e => {this.setState({[e.target.name]: e.target.value}); console.log(e.target.value)}

    handleSubmit = e => {e.preventDefault(); this.props.addDream(this.state); console.log(e)}

    render() {
        return (
            <div>
                <h1>Create a new dream here</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="nameInput">Name your dream: </label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Dream's name" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="nameInput">Provide some important details about it: </label>
                        <textarea type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange} placeholder="Dream's details" />
                    </div>
                    <br />
                    <div>
                        <input type="submit" value="Create a new dream" />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDream})(DreamNew)