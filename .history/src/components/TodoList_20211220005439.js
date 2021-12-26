/** @format */

import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todoList.map(todo => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
