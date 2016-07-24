import React, { Component, PropTypes } from 'react';
import { FormattedMessage, FormattedPlural, FormattedNumber } from 'react-intl';
import styles from './Header.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const i18nKey = 'Header.8ks82la';

class SubHeader extends Component {
  render() {
    return (
      <div className={ cx('container') }>
        <div className={ cx('text', 'subheader-text') }>
          <FormattedMessage
            id={ `${i18nKey}.unreadCount` }
            defaultMessage={ 'You have {unreadCount} unread {messages}' }
            values={{
              unreadCount: (
                <b>
                  <FormattedNumber
                    value={this.props.unreadCount}
                  />
                </b>
              ),
              messages: (
                <FormattedPlural
                  value={this.props.unreadCount}
                  one="message"
                  other="messages"
                />
              )
            }}
          />
        </div>
      </div>
    );
  }
}

SubHeader.propTypes = {
  unreadCount: PropTypes.number.isRequired,
};

export default SubHeader;
