import React from 'react'
import idevalami from './images/harom.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={idevalami} alt='Rólunk' />
                <div className='col-2'>
                    <h1>Rólunk</h1>
                    <span className='line'></span>
                    <p>Három fiatal gépészmérnök elhatározta, hogy megmutatja az embereknek, hogy a 3D nyomtatás ma már egy mindenki számára elérhető és megfizethető technológia.</p>
                </div>
            </div>
        </div>
    )
}

export default About
