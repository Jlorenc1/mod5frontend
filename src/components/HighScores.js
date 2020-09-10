import React from 'react';
import '../App.css'
// import {connect} from 'react-redux'
// import {fetchGames} from '../actions/gameActions'

class HighScores extends React.Component {
    state = {
        games: []
    }

    componentDidMount(){
        console.log('mount')
        this.fetchGames();
        // console.log(this.state)
        // this.listGames();
        // this.setState(() => {
        //     this.props.fetchGames(this.state)
        // })
        // console.log(this.state)
    }

    fetchGames = () => {
        console.log('fetchGames')
        fetch(`http://localhost:4000/games`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            this.setState({ games: data });
            // console.log(this.state)
            // this.listGames(this.state)
        });
    };

    listGames = () => {
        console.log(this.state.games)
        return this.state.games.map((game) => {
            return(
                <h1>{game.user.username} {game.score}</h1>
            )
        })
    }

    render() {
        // console.log(this.state)
        
        return (
            <div className="HighScores">
                <h1>HighScores</h1>
                {this.listGames()}
            </div>
        )
    }
}

export default HighScores;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchGames: (gameInfo) => dispatch(fetchGames(gameInfo))
//     }
// }

// // const mapStateToProps = (state) => {
// //     games: state.gameReducer
// // }

// export default connect(null, mapDispatchToProps)(HighScores)