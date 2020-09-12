import { ADD_ITEM, DELETE_ITEM,
  ON_TOGGLE_IMPORTANT, ON_TOGGLE_DONE,
  ON_SEARCH_CHANGE, ON_FILTER_CHANCE } from '../types/types';

export const addItem = (text) => {
  return {
    type: ADD_ITEM,
    label: text,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};

export const onToggleImportant = (id) => {
  return {
    type: ON_TOGGLE_IMPORTANT,
    id,
  };
};

export const onToggleDone = (id) => {
  return {
    type: ON_TOGGLE_DONE,
    id,
  };
};

export const onSearchChange = (term) => {
  return {
    type: ON_SEARCH_CHANGE,
    term,
  };
};

export const onFilterChange = (filter) => {
  return {
    type: ON_FILTER_CHANCE,
    filter,
  };
};
