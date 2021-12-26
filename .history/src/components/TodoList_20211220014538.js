/** @format */

import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, setTodoList, filterTodoList }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filterTodoList.map(todo => {
          return <Todo key={todo.id} todo={todo} setTodoList={setTodoList} todoList={todoList} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
