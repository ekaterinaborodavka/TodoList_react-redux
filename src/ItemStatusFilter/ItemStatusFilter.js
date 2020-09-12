import React from 'react';
import PropTypes from 'prop-types';

import './ItemStatusFilter.css';

const ItemStatusFilter = (props) => {
  const { filter, onFilterChange } = props;
  const buttonsArr = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];

  const buttons = buttonsArr.map(({ name, label}) => {
    const isActive = filter === name;
    const classButton = isActive ? 'filter-button-active' : 'filter-button';
    return (
      <button type='button'
        className={ classButton }
        key={name}
        onClick={() => onFilterChange(name)}>{ label }</button>
    );
  });

  return (
    <div>
      {buttons}
    </div>
  );
};

export default ItemStatusFilter;

ItemStatusFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
