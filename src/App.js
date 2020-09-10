import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {autoLogin, logUserOut} from './actions/userActions'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import LoginComponent from './components/LoginComponent'
import SignUpComponent from './components/SignUpComponent'
import About from './components/About'
import HighScores from './components/HighScores'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import HowTo from './components/HowTo'
import Home from './components/Home'


class App extends React.Component{

  componentDidMount(){
    if (!!localStorage.token){
      this.props.autoLogin()
    }
  } 

  render(){
    // console.log(this.props.userReducer.loggedIn)
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={LoginComponent} />
            <Route path="/signup" component={SignUpComponent} />
            <Route exact path="/" component={Home} />
            {!!localStorage.token ? <>
            <Route path="/about" component={About} />
            <Route path="/highscores" component={HighScores} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/howto" component={HowTo} />
            </>:
            <>
            <Redirect to="/" />
            </>
            }
          </Switch>
        </div>
      </Router>
    );
  }
}



// const Home = () => {
//   return(
//     <div>

//     </div>
//   )
// };

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
    logUserOut: () => dispatch(logUserOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React, {useEffect} from 'react'
// import './App.css';
// import {useSelector, useDispatch} from 'react-redux'
// import LoginComponent from './components/LoginComponent'
// import SignUpComponent from './components/SignUpComponent'
// import {autoLogin} from './actions/userActions'

// const App = () => {
//   const userReducer = useSelector(state => state.userReducer)
//   const dispatch = useDispatch()
  
//   useEffect(() => {
//     dispatch(autoLogin())
//   }, [])
  
//   return (
//     <div className="App">
//         {
//           !userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {userReducer.user.username}</h1>
//         }
//         <SignUpComponent/>
//         <LoginComponent/>

//     </div>
//   )
// }

// export default App