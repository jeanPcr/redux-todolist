import * as types from "../constants/TodoActionTypes";

export const addTodo = (text, cat = "default") => ({
  type: types.ADD_TODO,
  text,
  cat,
});
export const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  id,
  text,
});
export const editTodoCat = (id, cat) => ({
  type: types.EDIT_TODO_CAT,
  id,
  cat,
});
export const clearCompleted = (id) => ({
  type: types.CLEAR_COMPLETED,
  id,
});
export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  id,
});
export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});
