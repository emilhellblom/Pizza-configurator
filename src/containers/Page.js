import React, { Component } from 'react';
import Options from '../components/Options'
import Drone from '../components/Drone'
import Basket from '../components/Basket'
import './Page.css'


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
                        Scroll down to get started!
                    </h2>
                    {/* <button>
                        START
                    </button> */}
                </div>
                <Options />
                <Drone />
            </div>
        );
    }
}

export default Page;