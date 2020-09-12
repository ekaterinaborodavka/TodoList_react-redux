import React from 'react';
import PropTypes from 'prop-types';

import './AppHeader.css';

const AppHeader = (props) => {
  const { toDo, done } = props;
  return (
    <div className='app-header'>
      <h1>My Todo List</h1>
      <h2>{ toDo } more to do, { done } done</h2>
    </div>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  toDo: PropTypes.number,
  done: PropTypes.number,
};
