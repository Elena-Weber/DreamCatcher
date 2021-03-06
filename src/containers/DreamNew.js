import React, { Component } from 'react';
import { addDream } from '../actions/dreamsActions';
import { connect } from 'react-redux';

// a form to create a new dream
class DreamNew extends Component {
    constructor(props) {
        super(props);
    
        this.state = { // what info is expected from a user
            name: '',
            description: ''
        }
    }
    
    handleChange = e => {this.setState({[e.target.name]: e.target.value}); console.log(e.target.value)}

    handleSubmit = e => {e.preventDefault(); this.props.addDream(this.state); this.props.history.push('/dreams')}

    render() {
        return ( // the form itself
            <div className="new-dream">
                <h2>Create an amazing new dream here</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="nameInput">Dream's name: </label><br /><br />
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Name your dream" required />
                    </div>
                    <br /><br /><br />
                    <div>
                        <label htmlFor="nameInput">Dream's details: </label><br /><br />
                        <textarea type="text" name="description" id="description" rows="10" cols="80" value={this.state.description} onChange={this.handleChange} placeholder="To fully enjoy your custom-made dream, please provide as many details as possible" required />
                    </div>
                    <br /><br /><br />
                    <div>
                        <input className="btn" type="submit" value="Create a new dream" />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDream})(DreamNew);