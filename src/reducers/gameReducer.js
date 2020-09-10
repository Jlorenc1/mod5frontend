
const defaultState = {
    games:{

    }
}

const gameReducer = (state=defaultState,action) => {
    switch(action.type){
        case "SET_GAMES":
            return {
                games: {...action.payload}
            }
        // case "FETCH_GAMES":
        //     return {
        //         games: {...action.payload}
        //     }
        default: return state
    }
}

export default gameReducer

