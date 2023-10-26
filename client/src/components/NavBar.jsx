import React, {useState} from "react";
import {Link, NavLink} from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import './NavBar.css'

const NavBar = () =>{
    const[menuOpen, setMenuOpen] = useState(false);

    return(
        <nav>
            <Link to="/" className="title">Kalvin Tang</Link>
            <div className="menu" onClick={(e) => {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><button className="contact-btn">Contact</button></li>
            </ul>
        </nav>
    )
}

export default NavBar;