import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Footer () {

    const navStyle = {
        color: 'white'
    }

    return (
            <nav className="footer">
                <ul className="nav-links">
                    <Link style={navStyle} to='/about'>
                        <li>About</li>
                    </Link>
                    <Link style={navStyle} to='/howto'>
                        <li>How To</li>
                    </Link>
                </ul>
            </nav>           
    )
}

export default Footer;