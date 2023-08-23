import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Menu } from './components/Menu/Menu';
import { SandBox } from './pages/SandBox/SandBox';
import { Error } from './pages/Error/Error';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sandbox" element={<SandBox />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
