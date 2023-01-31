import React from 'react'
import lito1 from './images/lito1.jpg'
import lito2 from './images/lito2.jpg'
import lito3 from './images/lito3.jpg'
import lito4 from './images/lito4.jpg'
import lito5 from './images/lito5.jpg'
import lito6 from './images/lito6.jpg'
import lito7 from './images/lito7.jpg'
import lito8 from './images/lito8.jpeg'

import './Products.css'

const Products = () => {
    return (
        <div className='products' id='products'>
            <div className='container'>
                <h1>Domborfényképek</h1>
                <span className='line'></span>
                <p className='desc'>és ha lekapcsolod a lámpát, a pasid nem látja, hogy még az exed van rajta:</p>
                <div className='content'>
                    <div className='card'>
                        <img src={lito1} />
                        {/* <h2>Termék1</h2>
                        <p className='priceTag'>1000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={lito2} />
                        {/* <h2>Termék2</h2>
                        <p className='priceTag'>2000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={lito3} />
                        {/* <h2>Termék3</h2>
                        <p className='priceTag'>3000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={lito4} />
                        {/* <h2>Termék3</h2>
                        <p className='priceTag'>3000 Ft</p> */}
                    </div>
                </div>
                <div className='content'>
                    <div className='card'>
                        <img src={lito5} />
                        {/* <h2>Termék1</h2>
                        <p className='priceTag'>1000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={lito6} />
                        {/* <h2>Termék2</h2>
                        <p className='priceTag'>2000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={lito7} />
                        {/* <h2>Termék3</h2>
                        <p className='priceTag'>3000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={lito8} />
                        {/* <h2>Termék3</h2>
                        <p className='priceTag'>3000 Ft</p> */}
                    </div>
                </div>
                <p className='desc'>Kiváncsi vagy további termékeinkre?</p>
                <button className='button'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target={'_blank'}>Kattints ide</a></button>
            </div>
        </div>
    )
}

export default Products
