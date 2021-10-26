import React from "react";

function TodoItem(props) {
  return (
    <div className="TodoItem">
      <p>{props.todo.text}</p>
      <label for="checkbox-input">
        {props.todo.completed ? (
          <i class="fas fa-check-circle"></i>
        ) : (
          <i class="far fa-circle"></i>
        )}
      </label>
      <input
        type="checkbox"
        id="checkbox-input"
        checked={props.todo.completed}
      />
    </div>
  );
}

export default TodoItem;
