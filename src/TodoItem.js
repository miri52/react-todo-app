import React from "react";

function TodoItem(props) {
  return (
    <div className='TodoItem'>
      <p>{props.todo.text}</p>
      <label htmlFor='checkbox-input'>
        {props.todo.completed ? (
          <i className='fas fa-check-circle'></i>
        ) : (
          <i className='far fa-circle'></i>
        )}
      </label>
      <input
        type='checkbox'
        id='checkbox-input'
        checked={props.todo.completed}
      />
    </div>
  );
}

export default TodoItem;
