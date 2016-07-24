import React, { Component, PropTypes } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import styles from './Notes.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Note extends Component {
  render() {
    const { id, text, completed, createdAt } = this.props;
    return (
      <div className={ cx('note-container') }>
        <div className={ cx('note-text') }>
          {completed ? (
            <span>
              <FormattedMessage
                id={ `Notes.${notes[id]}` }
                defaultMessage={ '{text}' }
                values={{ text }}
              />
              <span className={ cx('check-mark') }> ✓ </span>
              <div className={ cx('created-at') }>
                <FormattedRelative
                  value={ createdAt }
                />
              </div>
            </span>
          ) : (
            <span>
              <b>
                <FormattedMessage
                  id={ `Notes.${notes[id]}` }
                  defaultMessage={ '{text}' }
                  values={{ text }}
                />
              </b>
              <div className={ cx('created-at') }>
                <FormattedRelative
                  value={ createdAt }
                />
              </div>
            </span>
          )}
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Note;
