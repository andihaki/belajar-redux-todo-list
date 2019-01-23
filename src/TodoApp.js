import React from "react";
// import AddTodo from "./components/AddTodo";
// import TodoList from "./components/TodoList";
// import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

import AddTodo from "./my.components/AddTodo";
import TodoList from "./my.components/TodoList";
import VisibilityFilters from "./my.components/VisibilityFilters";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
