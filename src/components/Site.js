import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Products from './Products'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

function Site() {
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

export default Site;
