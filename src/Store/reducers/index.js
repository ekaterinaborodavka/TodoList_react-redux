import { todos } from '../../Utils/todos';
import { addNewItem, toggleProperty,
  removeElementById } from '../../Utils/todoUtils';
import { ADD_ITEM, DELETE_ITEM,
  ON_TOGGLE_IMPORTANT, ON_TOGGLE_DONE,
  ON_SEARCH_CHANGE, ON_FILTER_CHANCE } from '../types/types';

export const initialState = {
  todoData: todos,
  term: '',
  filter: 'all',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newTodoList = addNewItem(action.label, state.todoData);
      return {
        ...state,
        todoData: newTodoList,
      };
    }
    case DELETE_ITEM: {
      const newTodoList = removeElementById(action.id, state.todoData);
      return {
        ...state,
        todoData: newTodoList,
      };
    }
    case ON_TOGGLE_IMPORTANT: {
      const newTodoList = toggleProperty(state.todoData,
          action.id, 'important');
      return {
        ...state,
        todoData: newTodoList,
      };
    }
    case ON_TOGGLE_DONE: {
      const newTodoList = toggleProperty(state.todoData, action.id, 'done');
      return {
        ...state,
        todoData: newTodoList,
      };
    }
    case ON_SEARCH_CHANGE: {
      return {
        ...state,
        term: action.term,
      };
    }
    case ON_FILTER_CHANCE: {
      return {
        ...state,
        filter: action.filter,
      };
    }
    default:
      return state;
  }
};

export default reducer;
