import { SORT_TODOS } from "../actionTypes";

const sortReducer = (state = false, action) => {
  switch (action.type) {
    case SORT_TODOS: {
      return action.payload.sortOrder;
    }
    default: {
      return state;
    }
  }
};

export default sortReducer;