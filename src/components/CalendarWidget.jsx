import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../styles/CalendarWidget.module.css';
import { FaCalendarAlt } from "react-icons/fa";

function CalendarWidget() {
  const [date, setDate] = useState(new Date());

  return (
    <div className={styles.calendarContainer}>
      <h2 className={styles.heading}><FaCalendarAlt /> Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        className={styles.customCalendar}
      />
    </div>
  );
}

export default CalendarWidget;
