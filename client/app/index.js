import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import 'bootstrap/scss/bootstrap.scss';
import App from './App';

const appId='app';
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById(appId));