import React, { useState } from 'react';
import "./App.css";
import {BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import Courses from './pages/Courses';

function App() {

  return (
    <>
    <div className="App">

    <Routes>

     <Route path="/" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
    </Routes>
 
    </div>  
    </>
  )
}

export default App
