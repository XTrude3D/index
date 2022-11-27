import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import Demo from './components/Demo'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
