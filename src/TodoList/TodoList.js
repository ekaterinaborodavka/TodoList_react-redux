import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = (props) => {
  const { todos, onDeleted, onToggleImportant, onToggleDone } = props;
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className='todo-list-item' key={ id } >
        <TodoListItem
          { ...itemProps }
          onDeleted={() => onDeleted(id) }
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
        />
      </li>
    );
  });
  return (
    <ul className='todo-list'>
      { elements }
    </ul>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
};
