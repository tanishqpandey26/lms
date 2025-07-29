import React from 'react';
import styles from '../styles/courseGrid.module.css';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
    
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{course.title}</h3>
      <p className={styles.instructor}>Instructor: {course.instructor}</p>
      <div className={styles.progressWrapper}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${course.progress}%` }}></div>
        </div>
        <span>{course.progress}% Complete</span>
      </div>
      <Link to={`/courses/${course.id}`} className={styles.button}>
        Go to Course
      </Link>
    </div>
  );
}

export default CourseCard;
