import React from 'react';
import '../App.css'
import GameComponent from './GameComponent'
import ControllerComponent from './ControllerComponent'
import NavBar from './NavBar'
import Footer from './Footer'


function Dashboard () {
    return (
        <div className="Dashboard">
            <NavBar />
            <GameComponent />
            <ControllerComponent />
            <Footer />
        </div>
    )
}

export default Dashboard;