import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

import {
  getStatusFilter,
  searchTodos,
  sortTodos,
  paginateTodos
} from "../redux/helpers";

const ListTodos = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`${todo.id}`} todo={todo} />;
        })
      : "Nothig ToDo!"}
  </ul>
);

const mapStateToProps = (state) => {
  const { statusFilter, searchFilter, sortOrder, pageNumber } = state;
  var todos = getStatusFilter(state, statusFilter);
  if (state.searchFilter) todos = [...searchTodos(todos, searchFilter)];
  sortTodos(todos, sortOrder);
  todos = [...paginateTodos(todos, pageNumber)];
  return { todos };
};

export default connect(mapStateToProps)(ListTodos);