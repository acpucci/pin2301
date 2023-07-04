import React from 'react'
import { useState } from 'react'
import { Formulario } from './Formulario'

function Contact() {
    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" })

    const handleChange = (event)=>{
        console.log(event)
    }

    return (
        <section class="fondo">
            <Formulario handleChange={handleChange}/>
        </section>
    );
}


export default Contact;