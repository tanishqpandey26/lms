import React from 'react';
import styles from "../styles/Dashboard.module.css";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CourseGrid from "../components/CourseGrid";
import ToDoList from "../components/ToDoList";
import NotificationBanner from '../components/NotificationBanner';
import CalendarWidget from '../components/CalendarWidget';

function Dashboard() {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <NotificationBanner />
        <CourseGrid />
        <ToDoList/>
        <CalendarWidget />
      </div>
    </div>
  );
}

export default Dashboard;
