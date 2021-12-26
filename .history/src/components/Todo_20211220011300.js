/** @format */

import React from 'react';

const Todo = ({ todo, todoList, setTodoList }) => {
  const deleteHandler = () => {
    setTodoList(prevTodo => prevTodo.filter(item => item.id !== todo.id));
  };
  const completeHandler = () => {
    setTodoList(prevTodo =>
      prevTodo.map((item, index) => {
        if (item.id === todo.id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }

        return item;
      })
    );
  };

  return (
    <div className='todo'>
      <li className='todo-item'>{todo.text}</li>
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