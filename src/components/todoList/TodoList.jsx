import React from "react";
import TodoItem from "../todoItem/TodoItem";

const TodoList = ({ filteredTodos, actions }) => {
  return (
    <div>
      <h1>TodoList :</h1>
      {filteredTodos.map((todo, k) => {
        return <TodoItem todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
