import React from "react";
import "./App.css";
import todosData from "./todosData";
import TodoItem from "./TodoItem";

function App() {
  const todos = todosData.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  return (
    <main className='main'>
      <div className='todo-list'>{todos}</div>
      <button className='btn-primary'>+</button>
    </main>
  );
}

export default App;
