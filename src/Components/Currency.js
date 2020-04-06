import React, { Component } from 'react';

class Currency extends Component {

    state = {
        allCurrency: {},
        selectedCurrency: '',
        loading: true
    }

    // componentDidMount() {
    //     fetch('https://openexchangerates.org/api/currencies.json')
    //     .then(resp => resp.json())
    //     .then(json => this.setState({ allCurrency: json, loading: false }))
    // }

    render() {
        console.log(this.props.currencies)
        return (
            <div className="currency">
                {   
                    this.props.loading
                    ?
                    ''
                    :
                    this.props.currencies.map((currency, index) => {
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