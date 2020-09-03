import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {autoLogin} from './actions/userActions'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import LoginComponent from './components/LoginComponent'
import SignUpComponent from './components/SignUpComponent'
import NavBar from './components/NavBar'
// import Footer from './components/Footer'
import About from './components/About'

import HighScores from './components/HighScores'
import HomeNav from './components/HomeNav'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Profile from './components/Profile'
import HowTo from './components/HowTo'


class App extends React.Component{

  componentDidMount(){
    this.props.autoLogin()
  } 

  render(){
    console.log(this.props.userReducer.loggedIn)
    return (
      <Router>
        <div className="App">
        {/* <NavBar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/signup" component={SignUpComponent} />
            <Route path="/highscores" component={HighScores} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/howto" component={HowTo} />
          </Switch>
              {/* {
                !this.props.userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {this.props.userReducer.user.username}</h1>
              }
            
            <SignUpComponent/>
            <LoginComponent/>
            <button>Logout</button> */}
        </div>
      </Router>
    );
  }
}



const Home = () => {
  return(
    <div>
      <HomeNav />     
      <Footer />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin())
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