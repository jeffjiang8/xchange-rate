import React, { Component } from 'react';

class Currency extends Component {

    state = {
        allCurrency: {},
        selectedCurrency: '',
        loading: true
    }

    componentDidMount() {
        fetch('https://openexchangerates.org/api/currencies.json')
        .then(resp => resp.json())
        .then(json => this.setState({ allCurrency: json, loading: false }))
    }

    render() {
        // console.log(this.state.allCurrency)
        return (
            <div className="currency">
                {   
                    this.state.loading
                    ?
                    ''
                    :
                    // this.state.allCurrency.map((option, index) => {
                    //     return (
                    //         <form>
                    //             <select>
                    //                 <option>Select Your Currency</option>
                    //                 <option id={index}>{option}</option>
                    //             </select>
                    //         </form>
                    //     )
                    // })
                    // console.log(this.state.allCurrency)
                        this.state.allCurrency
                        ?
                        // console.log(this.state.allCurrency)
                        this.state.allCurrency.map( (option, index) => {
                            return(
                            <form>
                                <select>
                                    <option>Select Your Currency</option>
                                    <option id={index}>{option}</option>
                                </select>
                            </form>
                            )
                        })
                        :
                        ""
                }
            </div>
        );
    }
}

export default Currency;