import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_84bsd2i', 'template_9uxm7pb', form.current, '4EgQR1w60P5j1gi5b')
            .then((result) => {
                console.log(result.text);
                alert("Köszönjük megkeresését, üzenetét elküldtük!");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact' id='contact'>
            <div className='background'>
                <div className="content">
                    <h1>Kapcsolat</h1>
                    <span className='line'></span>
                    <p>Szeretnél valakit meglepni egy nem hétköznapi ajándékkal?</p>
                    <p>Eltört egy műanyag alkatrészed és szeretnéd pótolni?</p>
                    <p>Esetleg egy egyedi dologra van szükséged?</p>
                    <p>Keress minket bátran és segítünk!</p>

                    <form ref={form} onSubmit={sendEmail}>
                        <label>Név</label>
                        <input type="text" name="name" placeholder="Név" required />
                        <label>E-mail</label>
                        <input type="text" name="email" placeholder="E-mail" required />
                        <label>Termék</label>
                        <select name="product" required>
                            <option>Termék1</option>
                            <option>Termék2</option>
                            <option>Termék3</option>
                            <option>Termék4</option>
                            <option>Termék5</option>
                            <option>Információt kérek</option>
                        </select>
                        <label>Üzenet</label>
                        <textarea name="message" placeholder="Üzenet" required></textarea>
                        <input className="button" type="submit" value="Küldés" />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact
