import React, { useState } from 'react';
import "./App.css";
import {BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';

function App() {

  return (
    <>
    <div className="App">

    <Routes>

    <Route path="/" element={<Dashboard/>}></Route>

    <Route path="/courses/:id" element={<CourseDetail/>}></Route>
    </Routes>
 
    </div>  
    </>
  )
}

export default App
