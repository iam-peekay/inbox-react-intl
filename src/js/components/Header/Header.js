import React, { Component, PropTypes } from 'react';
import { FormattedMessage, FormattedPlural, FormattedNumber } from 'react-intl';
import styles from './Header.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const i18nKey = 'Header.8ks82la';

class Header extends Component {
  render() {
    return (
      <div className={ cx('container') }>
        <div className={ cx('text') }>
          <FormattedMessage
            id={ `${i18nKey}.greeting` }
            defaultMessage={ 'Welcome to your inbox, {name}!' }
            values={{ name: this.props.name }}
          />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  unreadCount: PropTypes.number.isRequired,
};

export default Header;

// <div>
//   <FormattedMessage
//     id={ `i18nKey.unreadCount` }
//     defaultMessage={ 'You have {unreadCount} unread {messages}.' }
//     values={{
//       unreadCount: {
//         <FormattedNumber
//           value={props.unreadCount}
//         />
//       },
//       messages: {
//         <FormattedPlural
//           value={props.unreadCount}
//           one="message"
//           other="messages"
//         />
//       }
//     }}
//   />
// </div>