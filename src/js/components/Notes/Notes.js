import React, { Component, PropTypes } from 'react';
import Note from './Note';
import styles from './Notes.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Notes extends Component {
  renderNotes = () => {
    const { notes } = this.props;
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
  notes: PropTypes.array.isRequired,
};

export default Notes;
