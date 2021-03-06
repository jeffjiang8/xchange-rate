import React, { Component } from 'react';
import Currency from '../Components/Currency'
import Converted from '../Components/Converted'

class Home extends Component {

    state = {
        allCurrency: {},
        selectedCurrency: '',
        swapped: true,
        loading: true
    }

    // componentDidMount() {
    // //     // const key = process.env.REACT_APP_XCHANGE_API_KEY
    // //     // fetch(`https://prime.exchangerate-api.com/v5/${key}/latest/CNY`)
    // //     // .then(resp => resp.json())
    // //     // .then(console.log)
    //     fetch('https://openexchangerates.org/api/currencies.json')
    //     .then(resp => resp.json())
    //     .then(json => this.setState({ allCurrency: json, loading: false }))
    // }

    handleSelected = () => {
        console.log("selected")
    }

    handleSwap = () => {
        this.setState({
            swapped: !this.state.swapped
        })
    }

    render() {
        console.log(this.state.allCurrency)
        return (
            <>

            <div className="home">
                <img src='../images/mula.gif' className="app-logo" alt="meh"/>
                
                    {
                        this.state.swapped
                        ?
                            <div className="actions">
                                <Converted />
                                    <div className="btns">
                                        <button onClick={this.handleSwap}><img src="../images/swap.png" alt="meh" className="swap-btn"/></button>
                                    </div>
                                <Currency currencies={this.state.allCurrency} loading={this.state.loading}/>

                                
                            </div>
                            
                        :
                            <div className="actions">
                                <Currency currencies={this.state.allCurrency} loading={this.state.loading}/>
                                    <div className="btns">
                                        <button onClick={this.handleSwap}><img src="../images/swap.png" alt="meh" className="swap-btn"/></button>
                                    </div>
                                <Converted />
                            </div>
                    }
                    
                
            </div>
            </>
        );
    }
}

export default Home;