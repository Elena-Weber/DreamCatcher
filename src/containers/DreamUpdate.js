import React, { Component } from 'react';
import { updateDream } from '../actions/dreamsActions';
import { connect } from 'react-redux';

class DreamUpdate extends Component {
    constructor() {
        super()
    
        this.state = {
                id: '',
                name: '',
                description: '',
                chosen: false
            }

    }

    componentDidMount(){
        this.setState({
                id: this.props.dream.id,
                name: this.props.dream.name,
                description: this.props.dream.description,
                chosen: this.props.dream.chosen
            })
    }

    handleChange = e => {this.setState({[e.target.name]: e.target.value}); console.log(e.target.value, this.props)}
    //handleSubmit = e => {e.preventDefault(); console.log(e)}
    handleSubmit = e => {e.preventDefault(); this.props.updateDream(this.state); console.log(this.state)}

    render() { console.log(this.props)
        //{debugger}
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

export default connect(mapStateToProps, {updateDream})(DreamUpdate)