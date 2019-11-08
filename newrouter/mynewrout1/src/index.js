import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom' 

ReactDOM.render(<Router>
<div>
<ul>
    <li><Link to="/">Home</Link> </li>
    <li><Link to="/contact">Contact me</Link> </li>

</ul>
</div>
    </Router>
    
    , document.getElementById('root'));

serviceWorker.unregister();
