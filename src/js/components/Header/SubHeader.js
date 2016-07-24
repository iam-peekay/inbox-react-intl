import React, { Component, PropTypes } from 'react';
import { FormattedMessage, FormattedPlural, FormattedNumber } from 'react-intl';
import styles from './Header.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class SubHeader extends Component {
  render() {
    const { unCompletedCount } = this.props;

    return (
      <div className={ cx('container') }>
        <div className={ cx('text', 'subheader-text') }>
          <FormattedMessage
            id={ 'SubHeader.unCompletedCount' }
            defaultMessage={ 'You have {unCompletedCount} uncompleted {notes}' }
            values={{
              unCompletedCount: (
                <b>
                  <FormattedNumber
                    value={unCompletedCount}
                  />
                </b>
              ),
              notes: (
                <FormattedPlural
                  value={unCompletedCount}
                  one="note"
                  other="notes"
                />
              ),
            }}
          />
        </div>
      </div>
    );
  }
}

SubHeader.propTypes = {
  unCompletedCount: PropTypes.number.isRequired,
};

export default SubHeader;
