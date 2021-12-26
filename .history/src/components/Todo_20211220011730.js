/** @format */

import React from 'react';

const Todo = ({ todo, todoList, setTodoList }) => {
  const deleteHandler = () => {
    setTodoList(prevTodo => prevTodo.filter(item => item.id !== todo.id));
  };
  const completeHandler = () => {
    setTodoList(prevTodo =>
      prevTodo.map((item, index) => {
        // 若相同id，則改變complete狀態
        if (item.id === todo.id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        // 否則不變
        return item;
      })
    );
  };

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.complete ? 'completed':}`}>{todo.text}</li>
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
