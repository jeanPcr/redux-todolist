import React from "react";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const { todo, onCompleteTodo, onDeleteTodo } = props;

  const propTypes = {
    todo: PropTypes.object.isRequired,
    onEditTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onCompleteTodo: PropTypes.func.isRequired,
  };

  const handleDoubleClick = () => {
    setEditing(false);
  };

  const handleSave = (id, text) => {
    if (text.length === 0) {
      onDeleteTodo(id);
    } else {
      onEditTodo(id, text);
    }
    setEditing(false);
  };

  let element;

  if (editing) {
    element = (
      <TodoTextInput
        text={todo.text}
        editing={editing}
        onSave={(text) => handleSave(todo.id, text)}
      />
    );
  } else {
    element = (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onCompleteTodo(todo.id)}
        />
        <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
        <button
          type="button"
          className="destroy"
          onClick={() => onDeleteTodo(todo.id)}
        />
      </div>
    );
  }

  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing,
      })}
    >
      {element}
    </li>
  );
};

export default TodoItem;
