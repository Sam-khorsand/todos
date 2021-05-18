import {
  ADD_TODO,
  MODIFY_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  STATUS_FILTER_TODOS,
  SEARCH_TODOS,
  SORT_TODOS,
  PAGINATE_TODOS
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = ({ title, description, date }) => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      title,
      description,
      date
    }
  };
};

export const modifyTodo = ({ id, title, description, date }) => ({
  type: MODIFY_TODO,
  payload: {
    id: id,
    title,
    description,
    date
  }
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id }
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
});
  
export const setStatusFilter = (filter) => ({
  type: STATUS_FILTER_TODOS,
  payload: { filter }
});

export const searchTodos = (search) => ({
    type: SEARCH_TODOS,
    payload: { search }
});

export const sortTodos = (sortOrder) => ({
  type: SORT_TODOS,
  payload: { sortOrder }
});

export const paginateTodos = (pageForward) => ({
  type: PAGINATE_TODOS,
  payload: { pageForward }
});  