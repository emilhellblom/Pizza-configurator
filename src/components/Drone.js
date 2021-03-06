import React, { Component } from 'react';
import {updateDrone} from '../actions/pizza'
import {connect} from 'react-redux'
import {Input} from 'react-materialize'
import '../containers/Page.css'

class Drone extends Component {
    state = {
        droneOption: ''
    }

    handleOptionChange = e => {
        const choice = e.target.value
        this.setState({droneOption: choice})
    }

    handleSumbit = e => {
        e.preventDefault()
        this.props.updateDrone(this.state.droneOption)
    }
    
    render() {
        console.log(this.state.droneOption)
        return (
            <div className='drone'>
                <h1 className='drone-header'>
                    Do you want our ultra fast drone delivery?
                </h1>
                <form className='drone-form' onSubmit={this.handleSumbit}>
                    <div className='options-row'>
                        <Input type='radio' value='Yes' onChange={this.handleOptionChange} checked={this.state.droneOption === 'Yes'} label='Yes' />
                        <Input type='radio' value='No' onChange={this.handleOptionChange} checked={this.state.droneOption === 'No'} label='No' />
                    </div>
                    <input type='submit' value='Done!'/>
                </form>
            </div>
        );
    }
}

export default connect(null, {updateDrone})(Drone)