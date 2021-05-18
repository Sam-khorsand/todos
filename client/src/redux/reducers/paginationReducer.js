import { PAGINATE_TODOS } from "../actionTypes";

const paginationReducer = (state = 1, action) => {
  switch (action.type) {
    case PAGINATE_TODOS: {
        return action.payload.pageForward ? state + 1 : state - 1;
    }
    default: {
      return state;
    }
  }
};

export default paginationReducer;