import React from 'react'
import service1 from './images/service1.jpg'
import service2 from './images/service2.jpg'
import service3 from './images/service3.png'
import './Services.css'

const Services = () => {
    return (
        <div className='services' id='services'>
            <div className='container'>
                <h1>Szolgáltatások</h1>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={service1} alt="resin" />
                        <div className="details">
                            <h2>PRECÍZIÓS RESIN NYOMTATÁS</h2>
                            <p>DLP és SLA technológiával gyorsan és egyszerűen, nagy pontosággal modellbábukhoz vagy kisméretű alkatrészekhez.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={service2} alt="fdm" />
                        <div className="details">
                            <h2>NAGYMÉRETŰ FDM ELEMEK</h2>
                            <p>Ideális nagyméretű funkcionális alkatrészekhez, modellekhez, akár 40 cm magasságig.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={service3} alt="cad" />
                        <div className="details">
                            <h2>CAD TERVEZÉS ÉS MŰSZAKI RAJZKÉSZÍTÉS</h2>
                            <p>CAD tervezés és műszaki rajzkészítés</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
