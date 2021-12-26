/** @format */
import React, { useState, useEffect } from 'react';

import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodoList, setFilterTodoList] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodoList(todoList.filter(todo => todo.complete === true));
        break;
      case 'uncompleted':
        setFilterTodoList(todoList.filter(todo => todo.complete === false));
        break;
      default:
        setFilterTodoList(todoList);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todoList, status]);
  return (
    <div className='App'>
      <header>
        <h1>Harry's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todoList={todoList}
        setTodoList={setTodoList}
        setStatus={setStatus}
        filterTodoList={filterTodoList}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
