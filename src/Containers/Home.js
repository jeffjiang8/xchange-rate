import React, { Component } from 'react';
import Currency from '../Components/Currency'
import Converted from '../Components/Converted'

class Home extends Component {

    

    componentDidMount() {
        const key = process.env.REACT_APP_XCHANGE_API_KEY
        fetch(`https://prime.exchangerate-api.com/v5/${key}/latest/CNY`)
        .then(resp => resp.json())
        .then(console.log)
    }

    render() {
        
        return (
            <div className="home">
                <img src='../images/mula.gif' className="app-logo" alt="meh"/>
                <div className="actions">
                    <Currency />
                    <div className="btns">
                        <button><img src="../images/swap.png" alt="meh" className="swap-btn"/></button>
                    </div>
                    <Converted />
                </div>
            </div>
        );
    }
}

export default Home;