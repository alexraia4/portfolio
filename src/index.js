import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/reset.css';

import {BrowserRouter, HashRouter} from 'react-router-dom';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;




ReactDOM.render(
      <React.StrictMode>
            <Router>
                  <App />
            </Router>
            
      </React.StrictMode>,
      document.getElementById('root')
);
