import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

function Navigation(){
    const location = useLocation();

    return(
        <div>
            <Logo/>
            <nav className="App-nav">
                <button id="home-button">
                    <Link to="/"
                        className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                </button>
                <a href="https://drive.google.com/file/d/1WBORLNlIartbaedIEA1k_Mrt_rpS58mF/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                <button id="projects-button">
                    <Link to='/projects'
                        className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
                </button>
            </nav>
        </div>
    );
}

export default Navigation;