import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter  } from 'react-router-dom'
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Connect from "./pages/Connect";
import LetsTalk from "./pages/Letstalk.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/letstalk" element={<LetsTalk />} />

          <Route path="*" element={<Notfound />} />
          
        </Routes>
  </BrowserRouter>,
)