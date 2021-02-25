import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRouter from './Routers/router';
import {CookiesProvider} from "react-cookie";

ReactDOM.render(
    <CookiesProvider>
        <Router>
            <ReactRouter/>
        </Router>,
    </CookiesProvider>,
    document.getElementById('root')
);