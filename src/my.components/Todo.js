import React from "react";

import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => {
  return (
    <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? "👌" : "👋"}
      <span
        style={
          todo && todo.completed ? { textDecoration: "line-through" } : null
        }
      >
        {todo.content}
      </span>
    </li>
  );
};

export default connect(
  null,
  { toggleTodo }
)(Todo);
