/** @format */

import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todoList.map(todo => {
          return (
            <Todo key={todo.id} text={todo.text} setTodoList={setTodoList} todoList={todoList} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
