import React from 'react';
import styles from '../styles/ToDoItem.module.css';

function ToDoItem({ todo, onToggle }) {
  return (
    <div className={`${styles.card} ${todo.completed ? styles.completed : ''}`}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className={styles.checkbox}
        />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.task}>{todo.task}</p>
        <p className={styles.dueDate}>Due: {todo.dueDate}</p>
      </div>
    </div>
  );
}

export default ToDoItem;
