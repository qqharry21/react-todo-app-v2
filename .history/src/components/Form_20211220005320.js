/** @format */

import React from 'react';

const Form = ({ inputText, setInputText, todoList, setTodoList }) => {
  const inputHandler = e => {
    setInputText(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    setTodoList(prevTodo => [
      ...prevTodo,
      {
        text: inputText,
        complete: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText('');
  };
  return (
    <form>
      <input type='text' className='todo-input' onChange={inputHandler} value={inputText} />
      <button className='todo-button' type='submit' onClick={submitHandler}>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
