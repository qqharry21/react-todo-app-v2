/** @format */

import React from 'react';

const Form = ({ setInputText }) => {
  const inputHandler = e => {
    setInputText(e.target.value);
  };
  return (
    <form onSubmit={}>
      <input type='text' className='todo-input' onChange={inputHandler} />
      <button className='todo-button' type='submit'>
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
