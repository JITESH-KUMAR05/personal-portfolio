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


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/letstalk" element={<LetsTalk />} />

          <Route path="*" element={<Notfound />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
