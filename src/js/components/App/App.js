import React, { PropTypes } from 'react';
import Header from './../Header/index';

const App = (props) => (
  <div>
    <Header
      name={"Preethi"}
      unreadCount={"4"}
    />
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
