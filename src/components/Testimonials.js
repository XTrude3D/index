import React from 'react'
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Áraink</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        {/* <img src={user1} alt='user1'/> */}
                        {/* <p>orál 1000</p> */}
                        <h1><span>Termék1</span></h1>
                        <p>1000ft</p>
                    </div>
                    <div className='card'>
                        {/* <img src={user2} alt='user1'/>
                        <p>In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p> */}
                        <h1><span>Termék2</span></h1>
                        <p>2000ft</p>
                    </div>
                    <div className='card'>
                        {/* <img src={user3} alt='user1'/>
                        <p>A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p> */}
                        <p><span>Termék3</span></p>
                        <p>4000ft</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
