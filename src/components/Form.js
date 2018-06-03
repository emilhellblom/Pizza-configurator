import React, { Component } from 'react';
import {updateBase, updateSauce, updateToppings} from '../actions/pizza'
import {connect} from 'react-redux'
import {Input, Row, Button} from 'react-materialize'


class Form extends Component {
	state = {
		base: {},
		sauce: {},
		toppings: [],
	}

	radioOrCheckbox = items => {
		const { toppings } = this.state;
		if (items.length > 4) {
			return (
				<div>
                    <div className='options-row'>

                        {items.map(item => (
                                <Input key={item} type='checkbox' name={item} onChange={this.handleInputChange} label={item}/>
                        ))}
                    </div>
					{toppings.length > 3 ? 
						<h2 className='toppings-error'>You can only choose 3 types of toppings!</h2> :
						<Button type='submit'>Update pizza!</Button>
					}
				</div> 
			)
		 } 
		 else {
			return (
                <div>
                    <div className='options-row'>
                    {items.map(item => (
                        <Input key={item.type} type='radio' name='group' onChange={() => this.handleOptionChange(item)} checked={(this.state.base.type || this.state.sauce.type) === item.type} label={item.type}/>
                    ))}
                    </div>
                    <Button type='submit'>Update pizza!</Button>
				</div>
			);
		}
	}

	handleInputChange = e => {
		const item = e.target.name
		if (this.state.toppings.includes(item)) {
			const deleteIndex = this.state.toppings.indexOf(item);
			this.state.toppings.splice(deleteIndex, 1)
			this.setState({ toppings: this.state.toppings })
		} else {
			this.setState(prevState => ({ toppings: [...prevState.toppings, item]}));
		}
	}

    handleOptionChange = item => {
        console.log(item)
			const type = item.type
			const price = Number(item.price)
			price > 5 ?
				this.setState({ base: { type, price} }) :
                this.setState({ sauce: { type, price} })
                
            
    }

    handleSumbit = e => {			
			e.preventDefault()
			const { updateBase, updateSauce, updateToppings } = this.props;
			const { base, sauce, toppings } = this.state;
			if (Object.keys(base).length > 0) updateBase(base)
			if (Object.keys(sauce).length > 0) updateSauce(sauce)
			if (toppings.length > 0) updateToppings(toppings)
    }

    render() {
			return (
				<div>
					<form className='form' onSubmit={this.handleSumbit}>
						{this.radioOrCheckbox(this.props.items)}
					</form>
				</div>
			);
    }
}

export default connect(null, {updateBase, updateSauce, updateToppings})(Form)
