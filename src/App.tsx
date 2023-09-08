import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import { ProjectDetail } from './pages/ProjectDetail/ProjectDetail';
import { Error } from './pages/Error/Error';

import { Footer } from './components/Footer/Footer';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <Router>
        {/* <Menu /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
