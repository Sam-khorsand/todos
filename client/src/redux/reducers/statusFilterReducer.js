import { STATUS_FILTER_TODOS } from "../actionTypes";
import { STATUS_FILTERS } from "../../constants";

const initialState = STATUS_FILTERS.ALL;

const statusFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_FILTER_TODOS: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default statusFilterReducer;