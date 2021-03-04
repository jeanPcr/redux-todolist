import * as types from "../constants/TodoActionTypes";

const initialState = [
  {
    text: "Apprendre Redux",
    completed: false,
    id: 0,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
        },
      ];
    case types.CLEAR_COMPLETED:
      return state.filter((todo) => todo.completed === false);

    case types.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case types.EDIT_TODO:
      return state.map((todo) => {
        return todo.id === action.id
          ? {
              ...todo,
              text: action.text,
            }
          : todo;
      });
    case types.COMPLETE_TODO:
      return state.map((todo) => {
        return todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo;
      });
    case types.COMPLETE_ALL_TODOS: {
      const areAllMarked = state.every((todo) => todo.completed);

      return state.map((todo) => ({
        ...todo,
        completed: !areAllMarked,
      }));
    }

    default:
      return initialState;
  }
};

export default todos;
