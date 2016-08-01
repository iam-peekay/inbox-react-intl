import React, { Component, PropTypes } from 'react';
import filter from 'lodash/filter';
import Header from './../Header/index';
import Widgets from './../Widgets/index';
import Data from './../../../../data';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    name: Data.name,
    notifications: Data.notifications,
    lastLogin: Data.lastLogin,
    unreadCount: filter(Data.notifications, ['read', false]).length,
  }

  render() {
    const { name, unreadCount, lastLogin } = this.state;
    return (
      <div>
        <Header
          name={ name }
          unreadCount={ unreadCount }
          lastLogin={ lastLogin }
        />
        <Widgets />
      </div>
    );
  }
}

export default App;
