import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, withRouter } from 'react-router-dom'

const WithRouterApp = withRouter(App)

ReactDOM.render(<BrowserRouter><WithRouterApp /></BrowserRouter>, document.getElementById('root'));