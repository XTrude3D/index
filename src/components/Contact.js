import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    const form = useRef();
    const [disabled, setDisabled] = useState(false);
    let send = true;

    const sendEmail = (e) => {
        if (send) {
            send = false;
            e.preventDefault();
            setDisabled(true);

            emailjs.sendForm('service_84bsd2i', 'template_9uxm7pb', form.current, '4EgQR1w60P5j1gi5b')
                .then((result) => {
                    console.log(result.text);
                    alert("Köszönjük megkeresését, üzenetét elküldtük!");
                    setDisabled(false);
                    send = true;
                }, (error) => {
                    console.log(error.text);
                    alert("A küldés során hiba történt, kérjük próbálja újra később, vagy keressen fel bennünket egy másik elérhetőségen!");
                    setDisabled(false);
                    send = true;
                });
        }
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
                        <label>Termék vagy szolgáltatás</label>
                        <select name="product" required>
                            <option> — </option>
                            <option>3D nyomtatott fénykép</option>
                            <option>Egyedi tárgy</option>
                            <option>Alkatrész</option>
                            <option>Lézergravírozás</option>
                            <option>CAD tervezés</option>
                            <option>3D szkennelés</option>
                            <option>3D nyomtató kalibrálás</option>
                            <option>Információt kérek</option>
                        </select>
                        <label>Üzenet</label>
                        <textarea name="message" placeholder="Üzenet" required></textarea>
                        <input disabled={disabled} className="button" type="submit" value="Küldés"/> 
                    </form>

                    <p>További elérhetőségeink:</p>
                    <div className='info'>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span> info@xtrude.hu</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                            <span> +36/1-234-5678</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
