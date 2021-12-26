/** @format */

import React from 'react';
import Todo from './Todo';
const TodoList = ({ todo }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todo.map(item => {
          return <Todo key={item.id} todo={item} />;
        })}
        <Todo />
      </ul>
    </div>
  );
};

export default TodoList;
