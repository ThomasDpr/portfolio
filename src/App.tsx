import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Layout } from './components/Layout/Layout';

import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import { ProjectDetail } from './pages/ProjectDetail/ProjectDetail';
import { Error } from './pages/Error/Error';
import './App.scss';


const App = () => {

  return (
    <HelmetProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
    </HelmetProvider>
  );
}
export default App;
