/** @format */

import React from 'react';
import Todo from './Todo';
const TodoList = ({ todoList }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todoList.map(item => {
          return <Todo key={item.id} todo={item} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
