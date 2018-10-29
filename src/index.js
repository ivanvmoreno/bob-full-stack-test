import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.css';
import './index.css';
import App from './App'
  
var destination = document.querySelector('#app');

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , destination);