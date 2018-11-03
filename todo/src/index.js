import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer';

ReactDOM.render(<Provider store={createStore(reducer)}><App /></Provider>, document.getElementById('root'))
