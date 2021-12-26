/** @format */
import React, { useState } from 'react';

import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <div className='App'>
      <header>
        <h1>Harry's Todo list</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todo={todo} setTodo={setTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
