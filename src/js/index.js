import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index';
import { IntlProvider } from 'react-intl';

// Render our root component into the div with id "root"
render(
  <IntlProvider locale={"en"}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
