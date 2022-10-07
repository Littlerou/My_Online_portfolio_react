import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

const Header = () => {
    const activeClass = (({ isActive }) => isActive ? 'current stylenav' : 'notCurrent stylenav')
    
    return(
        <nav>
            <NavLink className={activeClass}
            to="/" end>Home</NavLink>
            <NavLink className={activeClass} 
            to="/about">About</NavLink>
            <NavLink className={activeClass} 
            to="/portfolio">Portfolio</NavLink>
            
        </nav>
    )
}

export default Header;