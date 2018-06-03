import React, { Component } from 'react';
import {updateBase, updateSauce, updateToppings} from '../actions/pizza'
import {connect} from 'react-redux'


class Form extends Component {

    state = {
        base: {},
        sauce: {},
        toppings: [],

    }

    radioOrCheckbox = (items) => {
        if (items.length > 4) {
            return (
                <div>
                    {items.map(item => (

                        <label key={item}>
                            {item}
                            <input type='checkbox' name={item} onChange={this.handleInputChange}/>
                        </label>
                    ))}
                    {this.state.toppings.length > 3 &&
                                    
                    <h2 className='toppings-error'>
                        You can only choose 3 types of toppings!
                    </h2>
                    }
                    {this.state.toppings.length <= 3 && <input type='submit' value='Next item'/>}
                </div>
            )
        } else {
            return (
                <div>
                    {items.map(item => (
                    <label key={item.type}>
                        {item.type}
                        <input type='radio' name={item.type} value={item.price} onChange={this.handleOptionChange} checked={(this.state.base.type || this.state.sauce.type) === item.type} />
                    </label>
                    ))}
                    <input type='submit' value='Next item'/>
                </div>
            )
        }
    }

    handleInputChange = e => {
        const item = e.target.name
        if (this.state.toppings.includes(item)) {
            const deleteIndex = this.state.toppings.indexOf(item);
            this.state.toppings.splice(deleteIndex, 1)
            this.setState({ toppings: this.state.toppings })
        } else {
            this.setState(prevState => ({
                toppings: [...prevState.toppings, item]
            }))
        }
    }

    handleOptionChange = e => {
        const type = e.target.name
        const price = Number(e.target.value)
        if (price > 5) {
            this.setState({
                base: {
                    type,
                    price
                }
            })
        } else {
            this.setState({
                sauce: {
                    type,
                    price
                }
            })
        }
    }

    handleSumbit = e => {
        e.preventDefault()

        if (Object.keys(this.state.base).length > 0)
            this.props.updateBase(this.state.base)
        if (Object.keys(this.state.sauce).length > 0)
            this.props.updateSauce(this.state.sauce)
        if (this.state.toppings.length > 0)
            this.props.updateToppings(this.state.toppings)

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