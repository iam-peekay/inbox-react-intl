import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index';
import { IntlProvider, addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
addLocaleData(enLocaleData);

// Render our root component into the div with id "root"
render(
  <IntlProvider locale={"en"}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
