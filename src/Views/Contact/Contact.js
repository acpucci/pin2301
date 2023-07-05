import React from 'react'
import './Components/style.scss'
import { useState } from 'react'
import { Formulario } from './Formulario'
import Footer from './Footer'

function Contact() {
    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" })

    const handleChange = (event) => {
        console.log(event)
    }

    return (
        <section className="fondo-contact">
            <Formulario handleChange={handleChange} />
            <Footer/>
        </section>

    );
}


export default Contact;