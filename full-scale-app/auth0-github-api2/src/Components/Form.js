import React, { Component } from 'react';
import './AllCss.css';

export default class Form extends Component {
    render() {
        return (
            <div className="form">
                <form>
                    <input type="text" placeholder="UserName">

                    </input>
                </form>
            </div>
        )
    }
}
