import React from 'react'
import product1 from './images/controller.jpg'
import product2 from './images/product2.jpg'
import product3 from './images/product3.jpeg'
import product4 from './images/product4.jpg'
import service2 from './images/service2.jpg'
import './Products.css'

const Products = () => {
    return (
        <div className='products' id='products'>
            <div className='container'>
                <h1>Mintatermékek</h1>
                <span className='line'></span>
                <p className='desc'>Csupán a te egyediséged és igényed hiányzik róluk:</p>
                <div className='first-content'>
                    <div className='card'>
                        <img src={product1} />
                        <h2>Termék1</h2>
                        <p className='priceTag'>1000 Ft</p>
                    </div>
                    <div className='card'>
                        <img src={product2} />
                        <h2>Termék2</h2>
                        <p className='priceTag'>2000 Ft</p>
                    </div>
                    <div className='card'>
                        <img src={product3} />
                        <h2>Termék3</h2>
                        <p className='priceTag'>3000 Ft</p>
                    </div>
                </div>
                <div className='second-content'>
                    <div className='card'>
                        <img src={product4} />
                        <h2>Termék4</h2>
                        <p className='priceTag'>4000 Ft</p>
                    </div> 
                    <div className='card'>
                        <img src={service2} />
                        <h2>Termék5</h2>
                        <p className='priceTag'>5000 Ft</p>
                    </div>
                </div>
                <p className='desc'>Kiváncsi vagy további termékeinkre?</p>
                <button className='button'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target={'_blank'}>Kattints ide</a></button>
            </div>
        </div>
    )
}

export default Products
