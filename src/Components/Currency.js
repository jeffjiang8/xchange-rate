import React, { Component } from 'react';

class Currency extends Component {
    render() {
        console.log(this.props.allOptions)
        return (
            <div className="currency">
                <form>
                    <select>
                        <option>Select Your Currency</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default Currency;