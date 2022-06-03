import React from 'react'
import { Navbar } from '../index'
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
                </form>          
            </div>
        </div>
    )
}

export default Login
