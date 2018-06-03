import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Collapsible, CollapsibleItem} from 'react-materialize'
import '../containers/Page.css'

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
        return (
            <div >
                <Collapsible>
                    <CollapsibleItem header={!pizza.base && `Your basket` || (pizza.base && `Total price: ${this.calcBasket(pizza)}`)} icon='filter_drama'>
                        <div className='basket'>
                            <h1 className='basket-header'>
                                Your order!
                            </h1>
                            {pizza.base &&
                                <div>
                                    <h3 className='basket-items'>
                                        Base: {pizza.base.type}
                                    </h3>
                                    <h4 className='basket-items'>
                                        + ${pizza.base.price}
                                    </h4>
                                </div>
                            }
                            {pizza.sauce &&
                                <div>
                                    <h3 className='basket-items'>
                                        Sauce: {pizza.sauce.type}
                                    </h3>
                                    {(pizza.sauce.price > 0) &&
                                    <h4 className='basket-items'>
                                        + ${pizza.sauce.price}
                                    </h4>
                                    }
                                </div>
                            }
                            {pizza.toppings &&
                                <div>
                                    <h3 className='basket-items'>
                                        Toppings:
                                    </h3>                                
                                    {pizza.toppings.map(topping => (
                                        <h4 key={topping} className='basket-items'>{topping}</h4>
                                    ))}
                                    <h4 className='basket-items'>
                                        + $ {pizza.toppings.length * 0.5}
                                    </h4>
                                </div>
                            }
                            {pizza.drone &&
                                <div>
                                    <h3 className='basket-items'>Do you want your food delivered via drone?</h3>
                                    <h4 className='basket-items'>{pizza.drone}</h4>
                                </div>
                            }
                        </div>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        );
    }
}


const mapStateToProps = ({pizza}) => ({
    pizza
})

export default connect(mapStateToProps, null)(Basket)