import React from 'react';

const NavBar = (props) => {
    return(
        <header>
            <h2 className='logo'>Kalvin Tang</h2>
            <nav>
                <ul className='nav__links'>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Something Else</a></li>
                </ul>
            </nav>
            <a href="#" className="cta"><button>Contact</button></a>
        </header>
    )
}

export default NavBar;