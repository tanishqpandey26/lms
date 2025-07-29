import React, { useState } from 'react';
import styles from '../styles/NotificationBanner.module.css';
import { IoClose } from 'react-icons/io5';

function NotificationBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p className={styles.message}>
        🚧 Scheduled Maintenance: The platform will be unavailable from 11 PM to 2 AM tonight.
      </p>
      <button className={styles.closeButton} onClick={() => setVisible(false)}>
        <IoClose />
      </button>
    </div>
  );
}

export default NotificationBanner;
