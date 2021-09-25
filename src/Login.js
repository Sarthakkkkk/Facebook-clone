import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"



const Login = () => {
   
    return (
        <div className="login">
        <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            alt=""/>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt=""/>
        </div>
        <Button type="submit" >Sign In</Button>
            
        </div>
    )
}

export default Login
