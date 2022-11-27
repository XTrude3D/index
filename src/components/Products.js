import React from 'react'
import controller from './images/controller.jpg'
import dikathor from './images/dikathor.jpg'
import kutyatita from './images/kutyatita.jpg'
import './Products.css'

const Products = () => {
    return (
        <div className='products' id='products'>
            <div className='container'>
                <h1>Termékek</h1>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={controller} className='image' />
                        <h2>Termék1</h2>
                        <p>1000ft</p>
                    </div>
                    <div className='card'>
                        <h2>Termék2</h2>
                        <p>2000ft</p>
                    </div>
                    <div className='card'>
                        <h2>Termék3</h2>
                        <p>4000ft</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
