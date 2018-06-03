import React, { Component } from 'react';
import Form from './Form'

class Sauce extends Component {
    state = {
        sauces: [
            {
                type: 'White sauce',
                price: 0
            },
            {
                type: 'Red sauce',
                price: 0
            },
            {
                type: 'Double red sauce',
                price: 1.00
            },
            {
                type: 'Mix it up',
                price: 1.50
            }
        ]
    }

    render() {
        return (
            <div className='sauce'>
                <h1 className='sauce-header'>
                    What kind of sauce do you want?
                </h1>
                <Form items={this.state.sauces}/>
            </div>
        );
    }
}

export default Sauce;