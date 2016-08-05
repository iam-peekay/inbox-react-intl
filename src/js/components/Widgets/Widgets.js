import React, { Component, PropTypes } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import Widget from './Widget';
import styles from './Widgets.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const messages = defineMessages({
  widget1Header: {
    id: 'Widgets.widget1.header',
    defaultMessage: 'Creative header',
  },
  widget1Body: {
    id: 'Widgets.widget1.body',
    defaultMessage: 'Mark todays date: {date}',
  },
  widget2Header: {
    id: 'Widgets.widget2.header',
    defaultMessage: 'Here is another widget',
  },
  widget2Body: {
    id: 'Widgets.widget2.body',
    defaultMessage: 'Hello. How is your day going?',
  },
  widget3Header: {
    id: 'Widgets.widget3.header',
    defaultMessage: 'Yet another widget',
  },
  widget3Body: {
    id: 'Widgets.widget3.body',
    defaultMessage: 'What is the meaning of life, my friend?',
  },
  widget4Header: {
    id: 'Widgets.widget4.header',
    defaultMessage: 'This is the last widget',
  },
  widget4Body: {
    id: 'Widgets.widget4.body',
    defaultMessage: 'I love React so much!',
  },
});

class Widgets extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  }

  render() {
    const { formatMessage, formatDate } = this.props.intl;
    const currentDate = Date.now();
    return (
      <div className={ cx('widgets-container') }>
        <div className={ cx('widget-item-continer') }>
          <Widget
            header={ formatMessage(messages.widget1Header) }
            body={ formatMessage(messages.widget1Body, {
              date: formatDate(currentDate, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
            }) }
          />
        </div>
        <div className={ cx('widget-item-continer') }>
          <Widget
            header={ formatMessage(messages.widget2Header) }
            body={ formatMessage(messages.widget2Body) }
          />
        </div>
        <div className={ cx('widget-item-continer') }>
          <Widget
            header={ formatMessage(messages.widget3Header) }
            body={ formatMessage(messages.widget3Body) }
          />
        </div>
        <div className={ cx('widget-item-continer') }>
          <Widget
            header={ formatMessage(messages.widget4Header) }
            body={ formatMessage(messages.widget4Body) }
          />
        </div>
      </div>
    );
  }
}

export default injectIntl(Widgets);
