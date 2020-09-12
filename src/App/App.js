import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';
import * as actions from '../Store/actions/actions';
import { search, filterItems } from '../Utils/todoUtils';

import './App.css';

const App = () => {
  const todoData = useSelector((state) => state.todoData, shallowEqual);
  const term = useSelector((state) => state.term, shallowEqual);
  const filter = useSelector((state) => state.filter, shallowEqual);
  const dispatch = useDispatch();

  const visibleItems = filterItems(search( todoData, term), filter);
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  const deleteItem = useCallback(
      (id) => {
        dispatch(actions.deleteItem(id));
      }, [dispatch],
  );

  const addItem = useCallback(
      (text) => {
        dispatch(actions.addItem(text));
      }, [dispatch],
  );

  const onToggleImportant = useCallback(
      (id) => {
        dispatch(actions.onToggleImportant(id));
      }, [dispatch],
  );

  const onToggleDone = useCallback(
      (id) => {
        dispatch(actions.onToggleDone(id));
      }, [dispatch],
  );

  const onSearchChange = useCallback(
      (term) => {
        dispatch(actions.onSearchChange(term));
      }, [dispatch],
  );

  const onFilterChange = useCallback(
      (filter) => {
        dispatch(actions.onFilterChange(filter));
      }, [dispatch],
  );

  return (
    <div className='todo-app'>
      <AppHeader toDo={ todoCount } done={ doneCount } />
      <div className='top-panel'>
        <SearchPanel onSearchChange={ onSearchChange } />
        <ItemStatusFilter
          filter={filter}
          onFilterChange={ onFilterChange } />
      </div>
      <TodoList
        todos={ visibleItems }
        onDeleted={ deleteItem }
        onToggleImportant={ onToggleImportant }
        onToggleDone={ onToggleDone } />
      <ItemAddForm onItemAdded={ addItem } />
    </div>
  );
};

export default App;
