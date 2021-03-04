import React from "react";

const TodoTextInput = ({ text, editing, onSave }) => {
  return (
    <div>
      <input type="text" value={text} onChnage={editing} />
    </div>
  );
};

export default TodoTextInput;
