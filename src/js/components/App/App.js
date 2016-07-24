import React, { Component, PropTypes } from 'react';
import filter from 'lodash/filter';
import Header from './../Header/index';
import Notes from './../Notes/index';
import Data from './../../../../data';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    name: Data.name,
    notes: Data.notes,
    unCompletedCount: filter(Data.notes, ['completed', false]).length,
  }

  render() {
    const { name, notes, unCompletedCount } = this.state;
    return (
      <div>
        <Header
          name={ name }
          notes={ notes }
          unCompletedCount={ unCompletedCount }
        />
        <Notes
          notes={ Data.notes }
        />
      </div>
    );
  }
}

export default App;
