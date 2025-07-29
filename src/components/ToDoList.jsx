import React, { useState } from 'react';
import todosData from '../data/todos.json';
import ToDoItem from './ToDoItem';
import { FcTodoList } from "react-icons/fc";
import styles from '../styles/ToDoList.module.css';

function ToDoList() {
  const [todos, setTodos] = useState(
    todosData.map(todo => ({ ...todo, completed: false }))
  );

  const toggleCheckbox = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}> <FcTodoList/> To-Do List</h2>
      <div className={styles.list}>
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleCheckbox(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
