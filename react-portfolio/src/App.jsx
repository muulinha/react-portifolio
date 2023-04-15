import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';


function App() {
  return (
    <Router>
      <div className=''>
        <Navbar />
        <main>
          <Routes>
            <Route path="/about" render={<About />}/>
            <Route path="/projects" render={<Project />}/>
            <Route path="/contact" render={<Contact />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
