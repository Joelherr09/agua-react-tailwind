import './App.css';
import Cards from './components/Cards';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Cards/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
