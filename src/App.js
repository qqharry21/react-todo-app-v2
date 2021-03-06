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

  const saveLocalTodoList = () => {
    if (localStorage.getItem('todoList')) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    } else {
      localStorage.setItem('todoList', JSON.stringify([]));
    }
  };

  const getLocalTodoList = () => {
    if (localStorage.getItem('todoList')) {
      let newTodoList = localStorage.getItem('todoList', JSON.stringify(todoList));
      setTodoList(JSON.parse(newTodoList));
    } else {
      localStorage.setItem('todoList', JSON.stringify([]));
    }
  };

  // 初始化localStorage
  useEffect(() => {
    getLocalTodoList();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodoList();
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
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} filterTodoList={filterTodoList} />
    </div>
  );
}

export default App;
