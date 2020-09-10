import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function HomeNav () {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <h3>Dodge Game</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/login'>
                    <li>Login</li>
                </Link>
                <Link style={navStyle} to='/signup'>
                    <li>Sign Up</li>
                </Link>
            </ul>
        </nav>           
    )
}

export default HomeNav;