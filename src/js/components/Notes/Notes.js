import React, { Component, PropTypes } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import each from 'lodash/each';
import map from 'lodash/map';
import assign from 'lodash/assign';
import Note from './Note';
import styles from './Notes.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const messages = definedMessages({
  noteOne: {
    id: 'noteOne',
    defaultMessage: '{text}',
  }
});


class Notes extends Component {
  renderNotes = () => {
    const { notes, intl } = this.props;

    return notes.map(note => (
      <Note
        id={note.id}
        key={note.id}
        text={note.text}
        createdAt={note.createdAt}
        completed={note.completed}
      />
    ));
  }

  render() {
    return (
      <div className={ cx('notes-container') }>
        <div>
          {this.renderNotes()}
        </div>
      </div>
    );
  }
}

Notes.propTypes = {
  intl: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};

export default injectIntl(Notes);
