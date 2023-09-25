import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages'; // Import your Pages component


ReactDOM.render(
  <Router>
    <Pages />
  </Router>,
  document.getElementById('root')
);
