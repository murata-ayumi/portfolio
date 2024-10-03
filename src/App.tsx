import 'modern-normalize';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Gallery from './components/Gallery/Gallery.tsx';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
