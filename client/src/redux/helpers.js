import { STATUS_FILTERS, PER_PAGE } from "../constants";

export const getTodos = (store) =>
  store.todos && Object.keys(store.todos.todosObj).map((id) => ({
    ...store.todos.todosObj[id],
    id
  }));

export const getStatusFilter = (store, statusFilter) => {
  const allTodos = getTodos(store);
  switch (statusFilter) {
    case STATUS_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case STATUS_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case STATUS_FILTERS.ALL:
    default:
      return allTodos;
  }
};

export const searchTodos = (todos, search) =>
  todos.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

export const sortTodos = (todos, sortOrder) =>
  todos.sort((a, b) =>
    (sortOrder ? a.title > b.title : a.title < b.title) ? 1 : -1);

export const checkPagination = (store) => {
  var pagination = {forward: false, backward: false};
  const allTodos = getTodos(store) || [];
  if (allTodos.length !== 0) {
    if (allTodos.length / (store.pageNumber * PER_PAGE) > 1 )
        pagination.forward = true;
    if (store.pageNumber > 1)
        pagination.backward = true;
  }
  return pagination;
}

export const paginateTodos = (todos, page) => todos.slice((page - 1) * PER_PAGE, page * PER_PAGE);