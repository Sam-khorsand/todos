import { combineReducers } from "redux";
import statusFilter from "./statusFilterReducer";
import searchFilter from "./searchReducer";
import sortOrder from "./sortReducer";
import pageNumber from "./paginationReducer";
import todos from "./todosReducer";

export default combineReducers({
  todos,
  statusFilter,
  searchFilter,
  sortOrder,
  pageNumber
});