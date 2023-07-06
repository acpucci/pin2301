import React from 'react';

function NavBar(){
    return(
        <header className="head">
            <div className="logo">
                <a href="/"><img src="Components/top-logo.svg" alt="logo" /></a>
            </div>
            <nav className="navbar">
                <a href="#inicio">Home</a>
                <a href="#nosotros">About</a>
                <a href="#productos">Products</a>
                <a href="#servicios">Services</a>
                <a href="#contacto">Contact</a>
            </nav>
        </header>
    );
}

export default NavBar;