import React, { Component } from 'react';
import Form from './Form'

class Base extends Component {
    state = {
        bases: [
            {
                type: '20cm NY Style',
                price: 6.45
            },
            {
                type: '25cm NY Style',
                price: 8.99
            },
            {
                type: '30cm NY Style',
                price: 11.49
            },
            {
                type: '35cm NY Style',
                price: 13.49
            },
        ]
    }

    render() {
        return (
            <div className='base'>
                <h1 className='base-header'>
                    What kind of pizzabase do you want?
                </h1>
                <Form items={this.state.bases}/>
            </div>
        );
    }
}

export default Base;