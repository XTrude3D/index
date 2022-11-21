import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Prices from './components/Prices'
import Demo from './components/Demo'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Prices />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
