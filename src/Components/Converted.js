import React, { Component } from 'react';

class Converted extends Component {
    render() {
        return (
            <div className="converted">
                <form>
                    <select>
                        <option>Select Your Currency</option>
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

export default Converted;