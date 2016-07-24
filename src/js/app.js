import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { IntlProvider } from 'react-intl';

// Import the main CSS file
import './../css/main.css';

// Render our root component into the div with id "root"
render(
  <IntlProvider locale={"en"}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
