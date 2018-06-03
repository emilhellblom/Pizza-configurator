import React, { Component } from 'react';
import Form from './Form'

class Toppings extends Component {
    state = {
        toppings: [
            'Pineapple',
            'Corn',
            'Olives green',
            'Red onions',
            'Spinach',
            'Cherry tomatoes',
            'Chicken'
        ]
    }

    render() {
        return (
            <div className='toppings'>
                <h1 className='toppings-header'>
                    What kind of toppings do you want?
                </h1>
                <Form items={this.state.toppings}/>
            </div>
        );
    }
}

export default Toppings;