import React from 'react';
import '../App.css'
import { Game } from '../Containers';
import {connect} from 'react-redux'


class GameComponent extends React.Component {


//create function to pass to game that pulls score and post to db
sendScore = (score) => {
    console.log('sendScore')
    console.log(score) 
    
    fetch(`http://localhost:4000/games`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
    body: JSON.stringify({
        user_id: this.props.user.id,
        score: score
        })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ games: data });
    });
    console.log(this.state)
}

    render(){
        console.log(this.props.user)
        return (
            <div className="GameComponent">
                <Game boardSize={11} playerSize={25} sendScore={this.sendScore}/>
            </div>
        )
    }
}

// export default GameComponent;


const mapStateToProps = (state) => {
    return({
    // games: state.gameReducer
    user: state.userReducer.user
    })
}

export default connect(mapStateToProps, null)(GameComponent)