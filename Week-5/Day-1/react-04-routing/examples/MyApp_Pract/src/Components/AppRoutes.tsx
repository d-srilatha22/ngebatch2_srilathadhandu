import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home';
import Contactus from '../views/Contactus';
import Aboutus from '../views/Aboutus';
import Blog from '../views/Blog';

export default function <AppRoutes>() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/aboutus" element={<Aboutus />}></Route>
      <Route path="/contactus" element={<Contactus />}></Route>
      <Route path="/blogs" element={<Blog />}></Route>
      <Route path="/blogs/:id" element={<Blog />}></Route>
    </Routes>
  );
}
