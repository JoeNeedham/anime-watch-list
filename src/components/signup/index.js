import React from 'react'
import { Navbar } from '../index'
import './signup.css'


function Signup() {
    return (
        <div className="wrapper">
            <Navbar />
            <div>
                <form className='login-form' action="" method="post">
                    <div className="form-field">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-field">
                        <label for="username">Username</label>
                        <input type="username" id="username" name="username" />
                    </div>
                    <div className="form-field">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <input type="submit" value="Create Account" className="button" />
                </form>          
            </div>
        </div>
    )
}

export default Signup
