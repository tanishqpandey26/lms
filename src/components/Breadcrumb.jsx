import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ courseTitle }) {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/">Dashboard</Link> &gt; <span>{courseTitle}</span> &gt; <span>Module</span>
    </nav>
  );
}

export default Breadcrumb;
