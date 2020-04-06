import React, { Component } from 'react';

class Currency extends Component {

    state = {
        allCurrencies: null,
        selectedCurrency: '',
        loading: true
    }

    componentDidMount() {
        fetch('https://openexchangerates.org/api/currencies.json')
        .then(resp => resp.json())
        .then(json => this.setState({ allCurrencies: json, loading: false }))
    }

    render() {
        console.log(this.state.allCurrencies)
        if (this.state.loading) {
            return <p>loading...</p>
        }
        return (
            <div className="currency">
                { 
                    this.state.allCurrencies.map((currency, index) => {
                        return (
                            <form>
                                <select>
                                    <option>Select Your Currency</option>
                                    <option id={index}>{currency}</option>
                                </select>
                            </form>
                        )
                    })
                    // console.log(this.state.allCurrency)
                        // this.state.allCurrency
                        // ?
                        // console.log(this.state.allCurrency)
                        // this.state.allCurrency.map( (option, index) => {
                        //     return(
                        //     <form>
                        //         <select>
                        //             <option>Select Your Currency</option>
                        //             <option id={index}>{option}</option>
                        //         </select>
                        //     </form>
                        //     )
                        // })
                        // :
                        // ""
                }
            </div>
        );
    }
}

export default Currency;