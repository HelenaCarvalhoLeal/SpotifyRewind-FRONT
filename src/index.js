import { Routes, Route, Link, redirect, Navigate } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Info } from "./pages/pagedata";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/info' element={<Info/>}/>
    </Routes>
  </BrowserRouter>
);