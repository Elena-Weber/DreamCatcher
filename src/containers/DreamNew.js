import React, { Component } from 'react';
import { addDream } from '../actions/dreamsActions';
import { connect } from 'react-redux';

class DreamNew extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            description: '',
            chosen: false
        }
    }
    
    handleChange = e => {this.setState({[e.target.name]: e.target.value}); console.log(e.target.value)}

    handleSubmit = e => {e.preventDefault(); this.props.addDream(this.state); this.props.history.push('/dreams'); console.log(e)}

    render() {
        return (
            <div className="new-dream">
                <h1>Create a new dream here</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="nameInput">Dream's name: </label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Name your dream" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="nameInput">Dream's details: </label>
                        <textarea type="text" name="description" id="description" rows="5" cols="40" value={this.state.description} onChange={this.handleChange} placeholder="Provide as many details as possible to fully enjoy your custom-made dream" />
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