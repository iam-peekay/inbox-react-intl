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

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, fallback to locale without region code, fallback to en
const messages = localeData[language] || localeData[languageWithoutRegionCode] || localeData.en;

// Render our root component into the div with id "root"

// If browser doesn't support Intl (i.e. Safari), then we manually import
// the intl polyfill and locale data.
if (!window.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/es.js',
    'intl/locale-data/jsonp/fr.js',
    'intl/locale-data/jsonp/it.js',
  ], (require) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/es.js');
    require('intl/locale-data/jsonp/fr.js');
    require('intl/locale-data/jsonp/it.js');
    render(
      <IntlProvider locale={language} messages={messages}>
        <App />
      </IntlProvider>,
      document.getElementById('root')
    );
  });
} else {
  render(
    <IntlProvider locale={language} messages={messages}>
      <App />
    </IntlProvider>,
    document.getElementById('root')
  );
}
