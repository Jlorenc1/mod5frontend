const setGames = (payload) => ({ type: "SET_GAMES", payload})

export const fetchGames = () => dispatch => {
    fetch(`http://localhost:4000/games`, {
        headers: {
            // "Content-Type": "application/json",
            // "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
        dispatch(setGames(data.games))
    })
}

export const createGame = (score) => dispatch => {
    fetch(`http://localhost:4000/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(score)
    })
    .then(res => res.json())
    .then(data => {
        dispatch(setGames(data.user))
    })
}

