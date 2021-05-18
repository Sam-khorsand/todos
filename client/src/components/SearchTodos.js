import React from "react";
import { connect } from "react-redux";
import { searchTodos } from "../redux/actions";

const SearchTodos = ({ searchTodos }) => {
  return (
    <React.Fragment>
      <input 
        className="search-todos"
        onChange={(e) => searchTodos(e.target.value)} 
        placeholder="Search ..."
      />
    </React.Fragment>
  );
};

export default connect(null, { searchTodos })(SearchTodos);