import React, { Component } from 'react';

class Currency extends Component {
    render() {
        return (
            <div className="currency">
                <form>
                    <select>
                        <option>1</option>
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