import React from 'react'
import lito1 from './images/lito1.jpg'
import lito2 from './images/lito2.jpg'
import lito3 from './images/lito3.jpg'
import lito4 from './images/lito4.jpg'
import lito5 from './images/lito5.jpg'
import lito6 from './images/lito6.jpg'
import lito7 from './images/lito7.jpg'
import lito8 from './images/lito8.jpeg'
import custom1 from './images/custom1.jpg'
import custom2 from './images/custom2.jpg'
import custom3 from './images/custom3.jpg'
import custom4 from './images/custom4.jpg'
import alk1 from './images/alk1.jpg'
import alk2 from './images/alk2.jpg'
import alk3 from './images/alk3.jpg'
import alk4 from './images/alk4.jpg'
import laser1 from './images/laser1.jpg'
import laser2 from './images/laser2.jpg'
import cad1 from './images/cad1.png'
import cad2 from './images/cad2.jpg'
import cad3 from './images/cad3.jpg'
import cad4 from './images/cad4.png'

import './Products.css'

const Products = () => {
    return (
        <div className='products' id='products'>
            <div className='container'>

                <h1>3D nyomtatott fényképek</h1>
                <span className='line'></span>
                <p className='desc'>Egyedi fényképes litofánok, melyekkel az élmény örök marad:</p>
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

                <h1>Egyedi tárgyak</h1>
                <span className='line'></span>
                <p className='desc'>Funkcionális vagy dísztárgyak, ahol csak a képzelet szabja a határokat:</p>
                <div className='content'>
                    <div className='card'>
                        <img src={custom1} />
                        {/* <h2>Termék1</h2>
                        <p className='priceTag'>1000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={custom2} />
                        {/* <h2>Termék2</h2>
                        <p className='priceTag'>2000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={custom3} />
                        {/* <h2>Termék3</h2>
                        <p className='priceTag'>3000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={custom4} />
                        {/* <h2>Termék3</h2>
                        <p className='priceTag'>3000 Ft</p> */}
                    </div>
                </div>

                <h1>Alkatrészek</h1>
                <span className='line'></span>
                <p className='desc'>Törött, illetve nehezen, vagy nem kapható alkatrészek gyártása:</p>
                <div className='content'>
                    <div className='card'>
                        <img src={alk1} />
                        {/* <h2>Termék1</h2>
                        <p className='priceTag'>1000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={alk2} />
                        {/* <h2>Termék2</h2>
                        <p className='priceTag'>2000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={alk3} />
                        {/* <h2>Termék3</h2>
                        <p className='priceTag'>3000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={alk4} />
                        {/* <h2>Termék3</h2>
                        <p className='priceTag'>3000 Ft</p> */}
                    </div>
                </div>

                <h1>Lézergravírozás</h1>
                <span className='line'></span>
                <p className='desc'>Adj személyes jelleget hétköznapi tárgyaidnak lézergravírozással:</p>
                <div className='content'>
                    <div className='card'>
                        <img src={laser1} />
                        {/* <h2>Termék1</h2>
                        <p className='priceTag'>1000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={laser2} />
                        {/* <h2>Termék2</h2>
                        <p className='priceTag'>2000 Ft</p> */}
                    </div>
                </div>

                <h1>CAD tervezés</h1>
                <span className='line'></span>
                <p className='desc'>Rajz digitalizáció, műszaki rajz készítés, parametrikus és nem-parametrikus modellezés, "reverse engineering":</p>
                <div className='content'>
                    <div className='card'>
                        <img src={cad1} />
                        {/* <h2>Termék1</h2>
                        <p className='priceTag'>1000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={cad2} />
                        {/* <h2>Termék2</h2>
                        <p className='priceTag'>2000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={cad3} />
                        {/* <h2>Termék1</h2>
                        <p className='priceTag'>1000 Ft</p> */}
                    </div>
                    <div className='card'>
                        <img src={cad4} />
                        {/* <h2>Termék2</h2>
                        <p className='priceTag'>2000 Ft</p> */}
                    </div>
                </div>
                <div className='more'>
                    <p className='desc'>Kiváncsi vagy további termékeinkre?</p>
                    <button className='button'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target={'_blank'}>Kattints ide</a></button>
                </div>
            </div>
        </div>
    )
}

export default Products
