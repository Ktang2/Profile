import React, {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../stylesheets/NavigationBar.css"

const NavigationBar = (props) => {

    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>Kalvin Tang</h3>
            <nav ref={navRef}>
                <div>
                    <a href="/aboutMe">About Me</a>
                    <a href="#">Projects</a>
                    <a href="#">Somethingg</a>
                </div>
                <div>
                    <a className="contact-btn" href="#">Contact</a>
                    <FaBars/>
                </div>
            </nav>
        </header>
    )
}

export default NavigationBar;