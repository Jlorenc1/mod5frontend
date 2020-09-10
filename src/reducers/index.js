import userReducer from './userReducer'
import gameReducer from './gameReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    gameReducer
})

export default rootReducer