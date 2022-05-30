import React, { useState, useEffect } from "react";
import "./App.css";
import todosData from "./todosData";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // switch to getting the initial todos directly from localStorage:
    // let todosArr = JSON.parse(localStorage.getItem("todos"));
    let todosArr = todosData.map((el) => el);
    if (todosArr) {
      setTodos(todosArr);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleClick() {
    const newTodo = prompt("Set new todo");
    console.log(newTodo);
    let todosArr = JSON.parse(localStorage.getItem("todos"));
    if (!todosArr) todosArr = [];
    todosArr.push({
      //use react-id-generator to create unique ids
      id: "xxx",
      text: newTodo,
      completed: false,
    });
    window.localStorage.setItem("todos", JSON.stringify(todosArr));
    setTodos(todosArr);
  }

  let todoComponents = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));

  return (
    <main className='main'>
      <div className='todo-list'>{todoComponents}</div>
      <button className='btn-primary' onClick={handleClick}>
        +
      </button>
    </main>
  );
}

export default App;
