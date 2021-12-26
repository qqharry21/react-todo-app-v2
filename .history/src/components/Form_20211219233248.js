/** @format */

import React from 'react';

const Form = ({ inputText, setInputText, todo, setTodo }) => {
  const inputHandler = e => {
    setInputText(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    setTodo(prevTodo => [
      ...prevTodo,
      {
        text: inputText,
        complete: false,
        id: Math.random() * 1000,
      },
    ]);
  };
  return (
    <form>
      <input type='text' className='todo-input' onChange={inputHandler} />
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
