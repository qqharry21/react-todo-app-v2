/** @format */

import React from 'react';

const TodoList = ({ todo }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        <Todo />
      </ul>
    </div>
  );
};

export default TodoList;
