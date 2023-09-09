import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from './pages/Contact'
import About from './pages/About';
import LandingPage1 from './pages/LandingPage1';
import CompanyPage1 from './pages/CompanyPage1';
import BlogPost from './pages/BlogPost';
import Consultation from './pages/Consultation';


function App() {


  return (


    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="landingPage1" element={<LandingPage1 />} />
          <Route path="companyPage1" element={<CompanyPage1 />} />
          <Route path="blogPost" element={<BlogPost />} />
          <Route path="consultation" element={<Consultation/>} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
