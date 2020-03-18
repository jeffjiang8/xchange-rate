import React, { Component } from 'react';

class Currency extends Component {
    render() {
        console.log(this.props.allOptions)
        return (
            <div className="currency">
                {   this.props.loading
                    ?
                    ''
                    
                    
                    :
                    
                    this.props.allOptions.map( (option, index) => {
                        return(
                        <form>
                            <select>
                                <option>Select Your Currency</option>
                                <option id={index}>{option[0]}</option>
                            </select>
                        </form>
                        )
                    })
                    
                }
                
            </div>
        );
    }
}

export default Currency;