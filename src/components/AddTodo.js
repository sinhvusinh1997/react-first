import React, { useState } from 'react';
import Protypes from 'prop-types';

const AddTodo = props => {
  const addTodo = props.addTodoFunc;

  const [title, setTitle] = useState('');

  const addTodoFormStyle = {
    width: '60vw',
    display: 'flex',
    justifyContent: 'center',
    margin: '50px auto',
    border: '1px solid black',
    borderRadius: '5px'
  };

  const addTodoInputStyle = {
    flex: '10',
    padding: '10px',
    color: 'rgba(0, 0, 0, 0.6)',
    outline: 'none',
    border: '1px solid //#endregion',
    borderRadius: '5px'
  };

  const changeTitle = event => setTitle(event.target.value);

  const addSingleTodo = event => {
    event.preventDefault();
    if (title !== '') {
      addTodo(title)
      setTitle('')
    }
  };

  return (
    <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
      <input
        style={addTodoInputStyle}
        type="text"
        placeholder='Add new todo...'
        onChange={changeTitle}
        value={title}
      />
      <input type="submit" value="Add" className='btn' />
    </form>
  )

};

AddTodo.propTypes = {
  addTodoFunc: Protypes.func.isRequired
}

export default AddTodo;
