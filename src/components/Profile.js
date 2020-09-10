import React from 'react';
import '../App.css'
import {connect} from 'react-redux'

function Profile (props) {
    console.log(props.user)
    return (
        <div className="Profile">
            <h1>Profile</h1>
            <h1>{props.user.username}</h1>
                           
        </div>
    )
}

// export default Profile;

const mapStateToProps = (state) => {
    return({
    // games: state.gameReducer
    user: state.userReducer.user
    })
}

export default connect(mapStateToProps, null)(Profile)