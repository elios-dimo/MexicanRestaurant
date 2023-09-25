import './App.css';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Menu } from './components/Menu';
import { AnimatePages } from './AnimatePages';
import { Reserve } from './components/Reserve';

function App() {
  return (
    <>
      <AnimatePages>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Reserve />
      </AnimatePages>
    </>
  );
}

export default App;
