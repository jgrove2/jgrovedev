import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/about';
import Home from './pages';
import Projects from './pages/projects';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home title="Jgrove | Home" />} />
          <Route path="/about" element={<About title="Jgrove | About" />} />
          <Route path="/projects" element={<Projects title="Jgrove | Projects" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
