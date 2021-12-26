/** @format */

import React from 'react';

const Todo = ({ text, todoList, setTodoList }) => {
  const deleteHandler = () => {
    setTodoList(prevTodo => prevTodo.filter(todo => todo.text !== text));
  };
  const completeHandler = () => {};

  return (
    <div className='todo'>
      <li className='todo-item'>{text}</li>
      <button className='complete-btn' onClick={completeHandler}>
        <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn' onClick={deleteHandler}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
