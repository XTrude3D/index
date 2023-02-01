import React from 'react'
import './Home.css'
import background from './images/ujvideo.mp4'
import mobile from './images/mobile.jpg'

const Home = () => {
    return (
        <div className='container'>
            <div className='blank'></div>
            <div className='mobile'>
                <img src={mobile} alt="xtrude"></img>
            </div>
            <div className='home' id='home'>
                <video src={background} autoPlay muted playsInline/>
                {/* <div className='content'>
                    <h1><span>X</span>TRUDE</h1>
                    <h2><span>3D</span> NYOMTATÁS ÉS TERVEZÉS</h2>
                </div> */}
            </div>
        </div>
    )
}

export default Home
