import React, { Component } from 'react';

class Currency extends Component {

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
        .then(json => this.setState({ allCurrency: json, loading: false }))
    }

    render() {
        console.log(this.state.allCurrency)
        return (
            <div className="currency">
                {/* 
                    this.state.allCurrency.map( (option, index) => {
                        return(
                        <form>
                            <select>
                                <option>Select Your Currency</option>
                                <option id={index}>{option[0]}</option>
                            </select>
                        </form>
                        )
                    })
                    
                 */}
                
            </div>
        );
    }
}

export default Currency;