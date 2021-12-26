/** @format */

import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div className='todo'>
      <li className='todo-item'>{todo.text}</li>
      {todo.complete && (
        <button className='complete-btn'>
          <i className='fas fa-check'></i>
        </button>
      )}

      <button className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;