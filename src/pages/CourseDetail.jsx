import React from 'react';
import { useParams } from 'react-router-dom';
import courseDetails from '../data/courseDetails.json';
import Breadcrumb from '../components/Breadcrumb';
import CourseTabs from '../components/CourseTabs';

function CourseDetail() {
  const { id } = useParams();
  const course = courseDetails.find(c => c.id === id);

  if (!course) return <p>Course not found</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <Breadcrumb courseTitle={course.title} />
      <h1>{course.title}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <CourseTabs course={course} />
    </div>
  );
}

export default CourseDetail;
