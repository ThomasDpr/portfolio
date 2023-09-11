import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

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
        <ScrollToTop />
        <Navbar />
        <div className="testa">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
