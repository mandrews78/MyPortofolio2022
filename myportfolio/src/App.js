import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import GroupProjects from './pages/GroupProjects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// eslint-disable-next-line 
function App() {
  return (
    <div className='App'>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/aboutMe" element={ <About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/groupProjects" element={<GroupProjects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
