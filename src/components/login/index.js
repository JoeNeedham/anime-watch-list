import React from 'react'
import { Navbar } from '../index'
import { Link } from 'react-router-dom'
import './login.css'


function Login() {
    return (
        <div className="wrapper">
            <Navbar />
            <div>
                <form action="" method="post">
                    <div class="form-field">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    
                    <div class="form-field">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    
                    <input type="submit" value="Sign In" class="button" />
                    <a href="#0" class="forgot-password">Forgot your password?</a>
                    {/* <a href="#0" class="new-here">New here? Sign up now</a> */}
                    <Link class="new-here" to='/signup'>New here? Sign up now</Link>
                </form>          
            </div>
        </div>
    )
}

export default Login
