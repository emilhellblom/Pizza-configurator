import React, { Component } from 'react';
import {connect} from 'react-redux'

class Basket extends Component {

    calcBasket = (pizza) => {
        const totalItems = () => {
            if (pizza.base && pizza.sauce && pizza.toppings) {
                return pizza.base.price + pizza.sauce.price + (pizza.toppings.length * 0.5)
            } else if (pizza.base && pizza.sauce) {
                return pizza.base.price + pizza.sauce.price
            } else if (pizza.base && pizza.toppings) {
                return pizza.base.price + (pizza.toppings.length * 0.5)
            } else {
                return pizza.base.price
            }
        }
        if (pizza.drone === 'Yes') return (totalItems() * 1.1).toFixed(2)
        return totalItems()
    }

    render() {
        const { pizza } = this.props
        console.log(pizza)
        return (
            <div className='basket'>
                <h1 className='basket-header'>
                    Your order!
                </h1>
                <div>
                    {pizza.base &&
                        <div>
                            <h3>
                                Base: {pizza.base.type}
                            </h3>
                            <h4>
                                + ${pizza.base.price}
                            </h4>
                        </div>
                    }
                    {pizza.sauce &&
                        <div>
                            <h3>
                                Sauce: {pizza.sauce.type}
                            </h3>
                            {(pizza.sauce.price > 0) &&
                            <h4>
                                + ${pizza.sauce.price}
                            </h4>
                            }
                        </div>
                    }
                    {pizza.toppings &&
                        <div>
                            <h3>
                                Toppings:
                            </h3>                                
                            {pizza.toppings.map(topping => (
                                <h4 key={topping}>{topping}</h4>
                            ))}
                            <h4>
                                + $ {pizza.toppings.length * 0.5}
                            </h4>
                        </div>
                    }
                    {/* {pizza.drone} */}
                </div>
                <div>
                    {pizza.base &&
                    <h3>
                        Total price: ${this.calcBasket(pizza)}
                    </h3>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({pizza}) => ({
    pizza
})

export default connect(mapStateToProps, null)(Basket)