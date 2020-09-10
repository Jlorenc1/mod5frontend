import React from 'react'
import {connect} from 'react-redux'
import {signUserUp} from '../actions/userActions'

class SignUpComponent extends React.Component {
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
        this.props.signUserUp(this.state, this.props.history)
    }

    render(){
        return(
            <div>
                <h1>Sign Up Form</h1>
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
                        value="Sign Up"
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUserUp: (userInfo, history) => dispatch(signUserUp(userInfo, history))
    }
}

export default connect(null, mapDispatchToProps)(SignUpComponent)