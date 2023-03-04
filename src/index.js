import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {PagesRouter} from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
import { Provider } from 'react-redux';
import {store} from '../src/Store/bookingStore'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Provider store={store}>
    <BrowserRouter>
    <PagesRouter />
    </BrowserRouter>
    </Provider>
    </>
);
