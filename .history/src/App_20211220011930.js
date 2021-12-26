/** @format */
import React, { useState } from 'react';

import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState('all');
  return (
    <div className='App'>
      <header>
        <h1>Harry's Todo list</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todoList={todoList}
        setTodoList={setTodoList}
        setStatus={setStatus}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
