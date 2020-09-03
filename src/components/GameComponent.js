import React from 'react';
import '../App.css'
import { Game } from '../Containers';

class GameComponent extends React.Component {

    render(){
        return (
            <div className="GameComponent">
                <Game boardSize={11} playerSize={25} />
            </div>
        )
    }
}

export default GameComponent;
