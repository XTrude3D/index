import React from 'react'
import printer from './images/printer.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={printer} alt='john' />
                <div className='col-2'>
                    <h2>Rólunk</h2>
                    <span className='line'></span>
                    <p>&#8592;  Szépek vagyunk</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam massa non lectus aliquam accumsan. Suspendisse euismod nisl ut lacus.</p>
                    <p>(◐ ε ◑) ᴳᵘᵗᵉᶰ ᴹᵒʳᵍᵉᶰ (◐ ε ◑) ☢</p>
                    {/* <button className='button'>Explore More</button> */}
                </div>
            </div>
        </div>
    )
}

export default About
