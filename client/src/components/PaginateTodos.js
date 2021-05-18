import React from "react";
import { connect } from "react-redux";
import { paginateTodos } from "../redux/actions";
import { checkPagination } from "../redux/helpers";

const NEXT = String.fromCodePoint(0x1f448);
const PREVIOUS = String.fromCodePoint(0x1f449);

const PaginateTodos = ({forward, backward, paginateTodos}) => {
  return (
    <React.Fragment>
      <span className="pagination">
        <button 
          onClick={() => paginateTodos(false)}
          disabled={!backward}>
            {NEXT}
        </button>
        <button 
          onClick={() => paginateTodos(true)}
          disabled={!forward}>
            {PREVIOUS} 
        </button>
      </span>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const paginationBounds = checkPagination(state);
  return paginationBounds;
};

export default connect(mapStateToProps, {paginateTodos})(PaginateTodos);