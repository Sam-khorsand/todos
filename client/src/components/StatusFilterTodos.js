import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setStatusFilter } from "../redux/actions";
import { STATUS_FILTERS } from "../constants";

const StatusFilterTodos = ({ activeFilter, setStatusFilter }) => {
  return (
    <div className="status-filters">
      {Object.keys(STATUS_FILTERS).map((filterKey) => {
        const currentFilter = STATUS_FILTERS[filterKey];
        return (
          <span
            key={`${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter-active"
            )}
            onClick={() => {
              setStatusFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.statusFilter };
};

export default connect(mapStateToProps, { setStatusFilter })(StatusFilterTodos);