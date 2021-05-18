import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import AddModTodo from "./AddModTodo";

const Todo = ({ todo }) =>
  todo && (
    <li key={todo.id} className="todo-item">
      <span className={cx("todo-item", todo.completed && "todo-item-completed")}>
        <AddModTodo todo={todo} />
      </span>
    </li>
);

// export default Todo;
export default connect(null,{})(Todo);