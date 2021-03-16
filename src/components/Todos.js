import React, { useState, Fragment, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo'
import axios from 'axios';

const Todos = () => {
  const [todosState, setTodosState] = useState([]);

  useEffect(() => {
    const getTodo = async () => { 
      try {
        const res = await axios.get(
          'http://jsonplaceholder.typicode.com/todos?_limit=5'
        ) 
        setTodosState(res.data);
      } catch (error) {
        console.log(error.message)
      }
    };

    getTodo();
  }, []); 

  const markComplete = id => {
    const newTodos = todosState.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodosState(newTodos);
  };
  
  // delete todo
  const deleteTodo = async id => {
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
      const newTodos = todosState.filter(todo => todo.id !== id);
      setTodosState(newTodos)
    } catch (error) {
      console.log(error.message)
    }
  };

  // Add new todo
  const addTodo = async title => {
    try {
      const res = await axios.post(
        'http://jsonplaceholder.typicode.com/todos',
        {
          title,
          completed: false
        }
      );
      setTodosState([...todosState, res.data]);
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <Fragment>
      <AddTodo addTodoFunc={addTodo} />
      {todosState.map(todo => {
        return <TodoItem
          key={todo.id}
          todoProps={todo}
          markCompleteFunc={markComplete}
          deleteTodoFunc={deleteTodo}
        />
      })}
    </Fragment>
  )
}

export default Todos;