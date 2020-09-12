import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './SearchPanel.css';

const SearchPanel = (props) => {
  const { onSearchChange } = props;
  const [term, setTerm] = useState('');

  const onSearchItem = useCallback(
      (e) => {
        setTerm(e.target.value);
        onSearchChange(e.target.value);
      }, [onSearchChange],
  );

  return (
    <input type='text'
      className='search-input'
      placeholder='type to search'
      value={ term }
      onChange={ onSearchItem } />
  );
};

export default SearchPanel;

SearchPanel.propTypes = {
  onSearchChange: PropTypes.func,
};
