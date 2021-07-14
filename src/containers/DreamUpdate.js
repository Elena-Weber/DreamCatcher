import React, { Component } from 'react';
import { updateDream } from '../actions/dreamsActions';
import { connect } from 'react-redux';

class DreamUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: '',
            name: '',
            description: '',
            chosen: false
        }
    }
    componentDidMount(){
        this.findDream()
    }
    findDream = () => {
        console.log(this.state)
    //     //const { dreams, dreamId} = this.props
    //     //const dream = dreams.find(dream => dream.id === dreamId)
        // this.setState({
        //     id: dream.id,
        //     name: dream.name,
        //     description: dream.description
        // })
    }

    handleChange = e => {this.setState({[e.target.name]: e.target.value}); console.log(e.target.value)}
    //handleSubmit = e => {e.preventDefault(); console.log(e)}
    handleSubmit = e => {e.preventDefault(); this.props.updateDream(this.state); console.log(this.state)}

    render() {
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

const mapStateToProps = state => {
    return { dreams: state.dreams }
}

export default connect(mapStateToProps, {updateDream})(DreamUpdate)