// import React, { PropTypes } from 'react';
import React from 'react';

const style = () => {
    return {
        container: {
            textAlign: 'center'
        },
        info: {
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-around'
        }
    };
};

const GameInfo = ({
    timeElapsed,
    playerScore,
    highScore,
    globalHighScore = 'Loading...',
    startGame
}) => {
    const { container, info } = style();
    return (
        <div style={container}>
            <h3>Use arrows to move.</h3>
            <div style={info}>
                <p>Time: {timeElapsed}</p>
                <p>Score: {playerScore}</p>
            </div>
            <button onClick={startGame}>Reset</button>
            {/* <div style={info}>
                <p>High Score: {highScore}</p>
            </div> */}
        </div>
    )
}

// GameInfo.propTypes = {
//     timeElapsed: PropTypes.number.isRequired,
//     playerScore: PropTypes.number.isRequired,
//     highScore: PropTypes.number.isRequired,
//     // globalHighScore: PropTypes.number
// };

export default GameInfo;