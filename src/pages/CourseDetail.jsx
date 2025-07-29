import React from 'react';
import { useParams } from 'react-router-dom';
import courseDetails from '../data/courseDetails.json';
import Breadcrumb from '../components/Breadcrumb';
import CourseTabs from '../components/CourseTabs';
import Sidebar from '../components/Sidebar';
import styles from "../styles/CourseDetail.module.css";

function CourseDetail() {
  const { id } = useParams();
  const course = courseDetails.find(c => c.id === id);

  if (!course) return <p className={styles.notFound}>Course not found</p>;

  return (

    <>

    <div className={styles.dashboardLayout}>
        <Sidebar/>
    
        <div className={styles.mainContent}>

    <div className={styles.container}>
      <Breadcrumb courseTitle={course.title} />
      <h1 className={styles.title}>{course.title}</h1>
      <p className={styles.instructor}><strong>Instructor:</strong> {course.instructor}</p>
      <CourseTabs course={course} />
    </div>

</div>
</div>
    </>
  );
}

export default CourseDetail;
