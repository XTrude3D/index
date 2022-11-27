import React from 'react'
import idevalami from './images/idevalami.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={idevalami} alt='about' />
                <div className='col-2'>
                    <h2>Rólunk</h2>
                    <span className='line'></span>
                    <p>Három fiatal pályakezdő gépészmérnök elhatározta, hogy megmutatja az embereknek, hogy a 3D nyomtatás ma már egy mindenki számára elérhető és megfizethető technológia.</p>
                </div>
            </div>
        </div>
    )
}

export default About
