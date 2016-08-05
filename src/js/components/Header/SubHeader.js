import React, { Component, PropTypes } from 'react';
import { FormattedMessage, FormattedPlural, FormattedNumber, FormattedRelative } from 'react-intl';
import styles from './Header.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class SubHeader extends Component {
  render() {
    const { unreadCount, lastLogin } = this.props;

    return (
      <div className={ cx('container') }>
        <div className={ cx('text', 'subheader-text') }>
          <FormattedMessage
            id={ 'SubHeader.unreadCount' }
            defaultMessage={ 'You have {unreadCount} new {notifications}' }
            values={{
              unreadCount: (
                <b>
                  <FormattedNumber
                    value={ unreadCount }
                  />
                </b>
              ),
              notifications: (
                <FormattedPlural
                  value={ unreadCount }
                  one="notification"
                  other="notifications"
                />
              ),
            }}
          />
        </div>
        <div className={ cx('text', 'subheader-lastlogin') }>
          <FormattedMessage
            id={ 'SubHeader.lastLogin' }
            defaultMessage={ 'You last logged in {time}' }
            values={{ time: <FormattedRelative value={ lastLogin } /> }}
          />
        </div>
      </div>
    );
  }
}

SubHeader.propTypes = {
  lastLogin: PropTypes.string.isRequired,
  unreadCount: PropTypes.number.isRequired,
};

export default SubHeader;
