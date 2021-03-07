/**
 * ************************************
 *
 * @module  index.js
 * @author  Han Chae && Hanji Chen
 * @date    March 6, 2021
 * @description
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
