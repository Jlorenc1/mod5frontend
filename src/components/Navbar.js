import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {logUserOut} from '../actions/userActions'

class NavBar extends React.Component {

    handleLogOut = () => {
        console.log('handle log out')
        this.props.logUserOut()
        localStorage.clear();
    }

    render() {
        return(
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link  to='/highscores'>
                        <li>High Scores</li>
                    </Link>
                    <Link to='/profile'>
                        <li>Profile</li>
                    </Link>
                    <button onClick={this.handleLogOut}>Log Out</button>
                </ul>
            </nav>    

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserOut: () => dispatch(logUserOut())
    }
}

export default connect(null, mapDispatchToProps)(NavBar)





//////////////////////////////////////////////////////////////////////////////////////////////////////

// function NavBar () {

//     const navStyle = {
//         color: 'white'
//     }

//     let handleLogOut = (e) => {
        
//     }

//     return (
//             <nav>
//                 <h3>Logo</h3>
//                 <ul className="nav-links">
//                     <Link style={navStyle} to='/highscores'>
//                         <li>High Scores</li>
//                     </Link>
//                     <Link style={navStyle} to='/profile'>
//                         <li>Profile</li>
//                     </Link>
//                         <button onClick={this.handleLogOut}>Log Out</button>
//                 </ul>
//             </nav>           
//     )
// }

// export default NavBar;

/////////////////////////////////////////////////////////////////////////////////////////////////////


// import React from 'react'
// import {connect} from 'react-redux'
// import {fetchUser} from '../actions/userActions'

// class LoginComponent extends React.Component {
//     state = {
//         username: "",
//         password: ""
//     }

//     handleOnChange = (e) => {
//         e.persist();
//         this.setState(() => ({
//             [e.target.name]: e.target.value 
//         }))
//     }

//     onSubmit = (e) => {
//         e.preventDefault()
//         this.props.fetchUser(this.state)
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Login Form</h1>
//                 <form onSubmit={this.onSubmit}>
//                     <input 
//                         type="text" 
//                         name="username" 
//                         placeholder="Username" 
//                         value={this.state.username}
//                         onChange={this.handleOnChange}
//                     />
//                     <br/>
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={this.state.password}
//                         onChange={this.handleOnChange}
//                     />
//                     <br/>
//                     <input
//                         type="submit"
//                         value="Login"
//                     />
//                 </form>
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
//     }
// }

// export default connect(null, mapDispatchToProps)(LoginComponent)