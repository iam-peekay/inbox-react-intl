import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import SubHeader from './SubHeader';
import styles from './Header.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Header extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    lastLogin: PropTypes.string.isRequired,
    unreadCount: PropTypes.number.isRequired,
  }

  render() {
    const { name, unreadCount, lastLogin } = this.props;

    return (
      <div className={ cx('container') }>
        <div className={ cx('text', 'header-text') }>
          <FormattedMessage
            id={ 'Header.greeting' }
            defaultMessage={ 'Welcome to your dashboard, {name}!' }
            values={{ name }}
          />
        </div>
        <SubHeader
          unreadCount={ unreadCount }
          lastLogin={ lastLogin }
        />
      </div>
    );
  }
}

export default Header;
