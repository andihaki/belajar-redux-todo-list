import React from "react";
// import Todo from "../components/Todo";
import Todo from "../my.components/Todo";

import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => {
  // console.log(todos);
  return (
    <ul>
      {todos && todos.length
        ? todos.map(todo => <Todo key={todo.id} todo={todo} />)
        : "aman, tidak ada PeeR"}
    </ul>
  );
};

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
