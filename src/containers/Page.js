import React, { Component } from 'react';
import Base from '../components/Base'
import Sauce from '../components/Sauce'
import Toppings from '../components/Toppings'
import Drone from '../components/Drone'
import Basket from '../components/Basket'


class Page extends Component {
    render() {
        return (
            <div className="page">
                <div className='header'>
                    <div>
                        <Basket />
                    </div>
                </div>
                <div className='welcome-page'>
                    <h1 className='welcome-header'>
                        Are you hungry for some pizza?
                    </h1>
                    <h2 className='welcome-subheader'>
                        Click the button bellow to get started!
                    </h2>
                    <button>
                        START
                    </button>
                </div>
                <Base />
                <Sauce />
                <Toppings />
                <Drone />
            </div>
        );
    }
}

export default Page;