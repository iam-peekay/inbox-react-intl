import React, { Component, PropTypes } from 'react';
import styles from './Widgets.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Widget extends Component {
  render() {
    const { header, body } = this.props;

    return (
      <div className={ cx('widget-item-container') }>
        <div className={ cx('widget-header') }>
          {header}
        </div>
        <div className={ cx('widget-body') }>
          {body}
        </div>
      </div>
    );
  }
}

Widget.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Widget;
