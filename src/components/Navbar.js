import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function NavBar () {

    const navStyle = {
        color: 'white'
    }

    return (
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to='/about'>
                        <li>About</li>
                    </Link>
                    <Link style={navStyle} to='/highscores'>
                        <li>High Scores</li>
                    </Link>
                </ul>
            </nav>           
    )
}

export default NavBar;