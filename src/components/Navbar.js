import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo2.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/xtrude' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <div className={click ? "nav-menu active" : "nav-menu"}>
                    <Link className='nav-item' to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Kezdőlap</Link>
                    <Link className='nav-item' to="about" spy={true} smooth={true} offset={-20} duration={500} onClick={closeMenu}>Rólunk</Link>
                    <Link className='nav-item' to="testimonials" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Áraink</Link>
                    <Link className='nav-item' to="demo" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Szolgáltatások</Link>
                    <Link className='nav-item' to="demo" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Kapcsolat</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
