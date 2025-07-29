import React, { useState } from 'react';
import Overview from './Overview';
import Assignments from './Assignments';
import Grades from './Grades';
import styles from '../styles/CourseTabs.module.css';

function CourseTabs({ course }) {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div>
      <div className={styles.tabNav}>
        {["Overview", "Assignments", "Grades"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? styles.activeTab : styles.tab}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {activeTab === "Overview" && <Overview course={course} />}
        {activeTab === "Assignments" && <Assignments assignments={course.assignments} />}
        {activeTab === "Grades" && <Grades grades={course.grades} />}
      </div>
    </div>
  );
}

export default CourseTabs;
