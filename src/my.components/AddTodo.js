import React from "react";

import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  state = {
    value: ""
  };

  inputHandler = value => {
    this.setState({ value: value });
  };

  addTodoHandler = () => {
    this.props.addTodo(this.state.value);

    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.inputHandler(e.target.value)}
          value={this.state.value}
        />
        <button onClick={this.addTodoHandler}>Add Todo</button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
