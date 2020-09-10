import React from 'react';
import '../App.css'
import HomeNav from './HomeNav'
import Footer from './Footer'



function Home () {
    return (
        <div className="Home">
            <HomeNav />
            {/* <ControllerComponent /> */}
            <Footer />
        </div>
    )
}

export default Home;