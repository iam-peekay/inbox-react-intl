import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import SubHeader from './SubHeader';
import styles from './Header.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Header extends Component {
  render() {
    return (
      <div className={ cx('container') }>
        <div className={ cx('text', 'header-text') }>
          <FormattedMessage
            id={ 'Header.greeting' }
            defaultMessage={ 'Welcome to your notes, {name}!' }
            values={{ name: this.props.name }}
          />
        </div>
        <SubHeader
          unCompletedCount={ this.props.unCompletedCount }
        />
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  unCompletedCount: PropTypes.number.isRequired,
};

export default Header;
