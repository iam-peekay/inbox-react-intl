import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import SubHeader from './SubHeader';
import styles from './Header.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const i18nKey = 'Header.8ks82la';

class Header extends Component {
  render() {
    return (
      <div className={ cx('container') }>
        <div className={ cx('text', 'header-text') }>
          <FormattedMessage
            id={ `${i18nKey}.greeting` }
            defaultMessage={ 'Welcome to your inbox, {name}!' }
            values={{ name: this.props.name }}
          />
        </div>
        <SubHeader
          unreadCount={ this.props.unreadCount }
        />
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  unreadCount: PropTypes.number.isRequired,
};

export default Header;
