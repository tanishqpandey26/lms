import React from 'react';
import courseData from '../data/courseData.json';
import CourseCard from './CourseCard';
import styles from '../styles/courseGrid.module.css';

function CourseGrid() {
  return (
    <div className={styles.gridContainer}>
      {courseData.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseGrid;
