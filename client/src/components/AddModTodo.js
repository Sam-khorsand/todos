import React from "react";
import { connect } from "react-redux";
import { addTodo, modifyTodo, deleteTodo, toggleTodo } from "../redux/actions";
import cx from "classnames";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ADD = String.fromCodePoint(0x1F44D);	
const DELETE = String.fromCodePoint(0x1f44e);
const DONE = String.fromCodePoint(0x1f44c);
const NOTDONE = String.fromCodePoint(0x1f91e);

class AddModTodo extends React.Component {
  constructor(props) {
    super(props);
    var { title = "", description = "", date = "" } = props.todo;
    this.state = { title: title, description: description, date: date };
  }

  handleChange = ({ key, value }) => {
    this.setState({ ...this.state, [key]: value });
  };

  handleAddModTodo = () => {
    if (this.props.todo)
      this.props.modifyTodo({ id: this.props.todo.id, ...this.state });
    else {
      if (this.state.title) {
        this.props.addTodo(this.state);
        this.setState({ title: "", description: "", date: "" });
      }
    }
  };

  render() {
    return (
      <div
        className={cx("input-todo", this.props.todo && "input-todo-modify")}
        onSubmit={this.handleAddModTodo}
      >
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="title"
                size="20"
                placeholder="Title ..."
                onChange={(e) =>
                  this.handleChange({ key: "title", value: e.target.value })
                }
                onKeyPress={(e) => {
                  if (this.props.todo && e.key === "Enter") {
                    var value = e.target.value;
                    e.preventDefault();
                    this.handleAddModTodo({ key: "title", value: value });
                  }
                }}
                value={this.state.title}
              />
            </td>
            <td>
              <textarea
                name="description"
                rows="2"
                cols="20"
                placeholder="Description ..."
                value={this.state.description}
                onChange={(e) =>
                  this.handleChange({ key: "description", value: e.target.value })
                }
                onKeyPress={(e) => {
                  if (this.props.todo && e.key === "Enter") {
                    var value = e.target.value;
                    e.preventDefault();
                    this.handleAddModTodo({ key: "title", value: value });
                  }
                }}
              />
            </td>
            <td>
              <DatePicker
                selected={this.state.date}
                placeholderText="MM/DD/YYYY"
                onChange={(date) => this.handleChange({ key: "date", value: date })}
              />
              </td>
            <td>
              { this.props.todo ? 
                <span>
                <button onClick={() => this.props.toggleTodo(this.props.todo.id)}>
                  {this.props.todo.completed ? NOTDONE : DONE}
                </button> 
                <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>{DELETE}</button>
              </span>
              :
                <button onClick={this.handleAddModTodo}>{ADD}</button>
              }
              </td>
          </tr>
        </tbody>
        
        </table>
      </div>
    );
  }
}

export default connect(null, { addTodo, modifyTodo, toggleTodo, deleteTodo })(AddModTodo);