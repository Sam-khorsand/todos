import {
  ADD_TODO,
  MODIFY_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from "../actionTypes";

const initialState = {
  todosObj: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, title, description, date } = action.payload;
      return {
        ...state,
        todosObj: {
          ...state.todosObj,
          [id]: {
            title,
            description,
            date,
            completed: false
          }
        }
      };
    }
    case MODIFY_TODO: {
      const { id, title, description, date } = action.payload;
      return {
        ...state,
        todosObj: {
          ...state.todosObj,
          [id]: {
            ...state.todosObj.id,
            title,
            description,
            date
          }
        }
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todosObj: (function () {
          delete state.todosObj[id];
          return state.todosObj;
        })()
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todosObj: {
          ...state.todosObj,
          [id]: {
            ...state.todosObj[id],
            completed: !state.todosObj[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
