import { SEARCH_TODOS } from "../actionTypes";

const searchReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH_TODOS: {
      return action.payload.search;
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;