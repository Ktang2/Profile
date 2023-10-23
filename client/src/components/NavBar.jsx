import React from 'react';  
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = (props) => {
    return(
        <header>
            <div className='nav_bar'>
                <h2 className='logo'>Kalvin Tang</h2>
                <div className='lynx'>
                    <a href="#">About Me</a>
                    <a href="#">Projects</a>
                    <a href="#">Something</a>
                </div>
                <a href="#"><button className="action_btn">Contact</button></a>
                <div className='toggle-btn'>
                    <FaBars/>
                </div>
            </div>
        </header>
    )
}

export default NavBar;