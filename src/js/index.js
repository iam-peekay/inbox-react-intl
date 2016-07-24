import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';
import localeData from './../../build/locales/data.json';

addLocaleData([...en, ...es, ...fr, ...it]);

// Define user's language
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

// Split locales with a region code
const lc = language.toLowerCase().split(/[_-\s]+/)[0];

// Try full locale, fallback to locale without region code, fallback to en
const messages = localeData[language] || localeData[lc] || localeData.en;

// Render our root component into the div with id "root"
render(
  <IntlProvider locale={language} messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
