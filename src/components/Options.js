import React, { Component } from 'react';
import Form from './Form'
import '../containers/Page.css'

const options = ['bases', 'sauces', 'toppings'];

class Options extends Component {
	state = {
		toppings: [
			'Pineapple',
			'Corn',
			'Olives green',
			'Red onions',
			'Spinach',
			'Cherry tomatoes',
			'Chicken'
		],
		sauces: [
			{ type: 'White sauce', price: 0 },
			{ type: 'Red sauce', price: 0 },
			{ type: 'Double red sauce', price: 1.00 },
			{ type: 'Mix it up', price: 1.50 }
		],
		bases: [
			{ type: '20cm NY Style', price: 6.45 },
			{ type: '25cm NY Style', price: 8.99 },
			{ type: '30cm NY Style', price: 11.49 },
			{ type: '35cm NY Style', price: 13.49 },
		],
	}

	singular = x => x.substring(0, x.length - 1);

	render() {
		return (
			options.map(item => (
				<div key={item} className={item}>
					<h1 className={`${item}-header`}>What kind of {this.singular(item)} do you want?</h1>
					<Form items={this.state[item]}/>
				</div>
			))
		);
	}
}

export default Options;