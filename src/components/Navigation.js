import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation(){
    const location = useLocation();

    return(
        <nav className="App-nav">
            <button id="home-button">
                <Link to="/"
                    className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            </button>
            <button id="resume-button">
                <Link to="/">Resume</Link>
            </button>
            <button id="projects-button">
                <Link to='/projects'
                    className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
            </button>
        </nav>
    );
}

export default Navigation;