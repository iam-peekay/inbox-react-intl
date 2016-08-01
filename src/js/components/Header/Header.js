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
            defaultMessage={ 'Welcome to your dashboard, {name}!' }
            values={{ name: this.props.name }}
          />
        </div>
        <SubHeader
          unreadCount={ this.props.unreadCount }
          lastLogin={ this.props.lastLogin }
        />
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  lastLogin: PropTypes.string.isRequired,
  unreadCount: PropTypes.number.isRequired,
};

export default Header;
