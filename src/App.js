import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
