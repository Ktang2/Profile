import React, {useState} from "react";
import {Link, NavLink} from 'react-router-dom';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
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
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><button className="contact-btn">Contact</button></li>
                <div className="link-icons">
                    <Link className="link-icon"to="https://github.com/Ktang2"><FaGithub style={{ fontSize: '2rem' }}/></Link>
                    <Link className="link-icon" to="https://www.linkedin.com/in/kalvin-tang-b0b80575/"><FaLinkedin  style={{ fontSize: '2rem' }}/></Link>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;