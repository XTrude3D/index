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
                {/* <p>Csupán a te egyediséged és igényed hiányzik róluk:</p> */}
                <div className='content'>
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
                        <p className='priceTag'>4000 Ft</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
