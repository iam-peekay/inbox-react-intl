import React, { PropTypes } from 'react';
import Header from './../Header/index';
import Data from './../../../../data';

const App = (props) => (
  <div>
    <Header
      name={ Data.name }
      unreadCount={"4"}
    />
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
