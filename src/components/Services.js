import React from 'react'
import service1 from './images/service1.jpg'
import service2 from './images/service2.jpg'
import service3 from './images/service3.jpg'
import service4 from './images/service4.jpg'
import service5 from './images/service5.png'
import service6 from './images/service6.jpg'
import './Services.css'

const Services = () => {
    return (
        <div className='services' id='services'>
            <div className='container'>
                <h1>Szolgáltatások</h1>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={service1} alt="resin print nyomtatás" />
                        <div className="details">
                            <h2>PRECÍZIÓS RESIN NYOMTATÁS</h2>
                            <p>Gyorsan és egyszerűen, nagy pontosságú alkatrészek és részletgazdag modellek gyártása DLP és SLA technológiával.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={service2} alt="fdm print nyomtatás" />
                        <div className="details">
                            <h2>FDM NYOMTATÁS</h2>
                            <p>Ajándéktárgyak, funkcionális alkatrészek, szobrok gyártása, ideális nagy méretű termékekhez.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={service3} alt="lézergravírozás" />
                        <div className="details">
                            <h2>LÉZERGRAVÍROZÁS</h2>
                            <p>Egyedi feliratok, szimbólumok, logók szerkesztése, gravírozása és vágása szinte bármely felületre.</p>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div className='card'>
                        <img src={service4} alt="3d scan" />
                        <div className="details">
                            <h2>3D SZKENNELÉS</h2>
                            <p>Egy tárgy legapróbb részletekig való digitális megörökítése 0,02 mm-es pontossággal.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={service5} alt="cad tervezés" />
                        <div className="details">
                            <h2>CAD TERVEZÉS ÉS MŰSZAKI RAJZKÉSZÍTÉS</h2>
                            <p>Rajz digitalizáció, műszaki rajz készítés, parametrikus és nem-parametrikus modellezés, "reverse engineering".</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={service6} alt="3d nyomtató beállítás javítás" />
                        <div className="details">
                            <h2>3D NYOMTATÓ BEÁLLÍTÁS ÉS JAVÍTÁS</h2>
                            <p>Pontos és precíz nyomtatás érdekében történő beállítás és optimalizálás, alkatrészek cseréje.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
