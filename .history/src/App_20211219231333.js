/** @format */
import React, { useState } from 'react';

import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState([]);

  return (
    <div className='App'>
      <header>
        <h1>Harry's Todo list</h1>
      </header>
      <Form setInputText={setInputText} todo={todo} setTodo={setTodo} />
      <TodoList />
    </div>
  );
}

export default App;
