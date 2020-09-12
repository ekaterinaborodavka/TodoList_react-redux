import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './ItemAddForm.css';

const ItemAddForm = (props) => {
  const [label, setLabel] = useState('');
  const { onItemAdded } = props;

  const onLabelChange = useCallback(
      (e) => {
        setLabel(e.target.value);
      }, [],
  );

  const onSubmit = useCallback(
      (e) => {
        e.preventDefault();
        onItemAdded(label);
        setLabel('');
      }, [onItemAdded, label],
  );

  return (
    <form className='item-add-form'
      onSubmit={ onSubmit }>
      <input type='text'
        required
        className='form-control'
        onChange={ onLabelChange }
        placeholder='What needs to be done'
        value={ label } />
      <button className='item-add-form-button'>Add</button>
    </form>
  );
};

export default ItemAddForm;

ItemAddForm.propTypes = {
  onItemAdded: PropTypes.func,
};
