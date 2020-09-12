import React from 'react';
import PropTypes from 'prop-types';

import './TodoListItem.css';

const TodoListItem = (props) => {
  const { label, onDeleted, onToggleImportant, onToggleDone,
    important, done } = props;

  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }

  return (
    <span className= { classNames }>
      <i className='fa fa-check'></i>
      <span
        className='todo-list-item-label'
        onClick={ onToggleDone } >
        { label }
      </span>

      <span className='todo-list-item-button-wrapper'>
        <button className='todo-list-item-button' type='button'
          onClick={ onToggleImportant }>
          <i className='fa fa-exclamation'></i>
        </button>
        <button className='todo-list-item-button' type='button'
          onClick={ onDeleted }>
          <i className='fa fa-trash-o'></i>
        </button>
      </span>
    </span>
  );
};

export default TodoListItem;

TodoListItem.propTypes = {
  label: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
  important: PropTypes.bool,
  done: PropTypes.bool,
};
