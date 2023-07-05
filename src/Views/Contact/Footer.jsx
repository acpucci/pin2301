import React from "react";
import './Components/style.scss'

function Footer(){
    return(
        <footer className="foot">
            <h5>2023 © All rights reserved.</h5>
            <div className="logo">
                <a href=""> 
                <img src="./Components/Img/footer-logo.png" alt="logo" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;