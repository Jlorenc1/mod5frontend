import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions/userActions'

class LoginComponent extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.fetchUser(this.state, this.props.history)
    }

    render(){
        return(
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.username}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userInfo, history) => dispatch(fetchUser(userInfo, history))
    }
}

export default connect(null, mapDispatchToProps)(LoginComponent)