import {v4 as uuidv4} from 'uuid';

export const createTodoItem = (label) => {
  return {
    label,
    important: false,
    done: false,
    id: uuidv4(),
  };
};

export const addNewItem = (label, todoData) => {
  return [...todoData, createTodoItem(label)];
};

export const search = (items, term) => {
  if (term.length === 0) {
    return items;
  }
  return items.filter((item) => {
    return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
  });
};

export const removeElementById = (id, todoData) => {
  return todoData.filter((e) => e.id !== id);
};

export const filterItems = (items, filter) => {
  switch (filter) {
    case 'all':
      return items;
    case 'active':
      return items.filter((item) => !item.done);
    case 'done':
      return items.filter((item) => item.done);
    default:
      return items;
  }
};

export const toggleProperty = (arr, id, propName) => {
  const idx = arr.findIndex((el) => el.id === id);
  const oldItem = arr[idx];
  const newItem = {...oldItem, [propName]: !oldItem[propName]};
  return [
    ...arr.slice(0, idx),
    newItem,
    ...arr.slice(idx+1),
  ];
};
