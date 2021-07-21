import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateDream } from '../actions/dreamsActions';

class DreamUpdate extends Component {
    constructor() {
        super();
    
        this.state = {
            id: '',
            name: '',
            description: ''
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.dream.id,
            name: this.props.dream.name,
            description: this.props.dream.description
        })
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault(); this.props.updateDream(this.state); this.props.history.push('/dreams')
    }

    render() {
        return (
            <div className="new-dream">
                <h1>Edit your dream here</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="nameInput">Dream's name: </label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder={this.state.name} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="nameInput">Dream's details: </label>
                        <textarea type="text" name="description" id="description" rows="8" cols="60" value={this.state.description} onChange={this.handleChange} placeholder={this.state.description} />
                    </div>
                    <br />
                    <div>
                    <input type="submit" value="Update the dream" />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, dreamId) => {
    const id = parseInt(dreamId.match.params.id)
    return { dream: state.find(dream => dream.id === id) }
}

export default connect(mapStateToProps, {updateDream})(DreamUpdate);