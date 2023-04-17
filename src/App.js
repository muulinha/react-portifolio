import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';


function App() {
  return (
    <Router>
      <div className=''>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/projects" element={<Project/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/resume" element={<Resume/>}/>
            <Route path="*" element={<About/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
