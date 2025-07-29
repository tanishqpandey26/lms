import React from 'react';
import { Link } from 'react-router-dom';
import courseDetails from '../data/courseDetails.json';
import styles from '../styles/Courses.module.css';

function Courses() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>All Courses</h2>
      <div className={styles.grid}>
        {courseDetails.map(course => (
          <Link to={`/courses/${course.id}`} key={course.id} className={styles.link}>
            <div className={styles.card}>
              <div className={styles.title}>{course.title}</div>
              <div className={styles.instructor}>Instructor: {course.instructor}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;
