import React from "react";
import AddModTodo from "./components/AddModTodo";
import ListTodos from "./components/ListTodos";
import SearchTodos from "./components/SearchTodos";
import SortTodos from "./components/SortTodos";
import StatusFilterTodos from "./components/StatusFilterTodos";
import PaginateTodos from "./components/PaginateTodos";
import "./index.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <span><SearchTodos /><SortTodos /></span>
      <br />
      <AddModTodo todo={""} />
      <br />
      <ListTodos />
      <br />
      <span><StatusFilterTodos /><PaginateTodos/></span>
    </div>
  );
}
