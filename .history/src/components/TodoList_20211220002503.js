/** @format */

import React from 'react';
import Todo from './Todo';
const TodoList = ({ todo }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todo.map(todo => {
          return <Todo key={todo.id} todo={todo} />;
        })}
        <Todo />
      </ul>
    </div>
  );
};

export default TodoList;
