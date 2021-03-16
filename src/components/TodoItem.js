import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = props => {
  const todo = props.todoProps;
  const markComplete = props.markCompleteFunc;
  const deleteTodo = props.deleteTodoFunc;

  // Style
  const todoItemStyle = {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    marginBottom: '15px',
    textDecoration: todo.completed ? 'line-through' : 'none'
  }

  const deleteButtonStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    boderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    outline: 'none'
  }

  // Return
  return (
    <p style={todoItemStyle}>
      <input type="checkbox"
        onClick={markComplete.bind(null, todo.id)}
      />
      {todo.title}
      <button
        style={deleteButtonStyle}
        onClick={deleteTodo.bind(null, todo.id)}
      >Delete</button>
    </p>
  )
}

// PropTypes
TodoItem.propTypes = {
  todoProps: PropTypes.object.isRequired,
  markCompleteFunc: PropTypes.func.isRequired,
  deleteTodoFunc: PropTypes.func.isRequired
};


export default TodoItem;