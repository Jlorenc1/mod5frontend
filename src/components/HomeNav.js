import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function HomeNav () {

    const navStyle = {
        color: 'white'
    }

    return (
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to='/signup'>
                        <li>Sign Up</li>
                    </Link>
                </ul>
            </nav>           
    )
}

export default HomeNav;