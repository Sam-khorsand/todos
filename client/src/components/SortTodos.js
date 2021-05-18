import React from "react";
import { connect } from "react-redux";
import { sortTodos } from "../redux/actions";

const ASCENDING = String.fromCodePoint(0x1f446);
const DESCENDING = String.fromCodePoint(0x1f447);

class SortTodos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ascending: true };
  }

  toggleOrder = () => {
    this.setState(({ ascending }) => ({
      ascending: !ascending
    }));
    this.props.sortTodos(this.state.ascending);
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.toggleOrder()}>
          {this.state.ascending ? ASCENDING : DESCENDING}
        </button>
      </React.Fragment>
    );
  }
}

export default connect(null, { sortTodos })(SortTodos);