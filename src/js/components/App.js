import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h3> Hello Preethi! </h3>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;

// { this.props.children }
