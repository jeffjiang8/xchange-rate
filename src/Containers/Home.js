import React, { Component } from 'react';
import Currency from '../Components/Currency'
import Converted from '../Components/Converted'

class Home extends Component {

    state = {
        allCurrency: '',
        selectedCurrency: ''
    }

    componentDidMount() {
        // const key = process.env.REACT_APP_XCHANGE_API_KEY
        // fetch(`https://prime.exchangerate-api.com/v5/${key}/latest/CNY`)
        // .then(resp => resp.json())
        // .then(console.log)
        fetch('https://openexchangerates.org/api/currencies.json')
        .then(resp => resp.json())
        .then(json => this.setState({ allCurrency: json }))
    }

    handleSelected = () => {
        console.log("selected")
    }

    render() {
        console.log(this.state.allCurrency)
        return (
            <div className="home">
                <img src='../images/mula.gif' className="app-logo" alt="meh"/>
                <div className="actions">
                    <Currency allOptions={this.state.allCurrency}/>
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