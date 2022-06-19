import { React, useState } from 'react'
import { Navbar } from '../index'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './login.css'


function Login() {
    const [data, setData] = useState({ email: "", password: ""});
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    
    const handleSubmit = async (e) => {
		e.preventDefault();
        try {
            const url ="http://localhost:8080/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";
        } catch (error) {
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
        }
    }
    return (
        <div className="wrapper">
            <Navbar />
            <div>
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                        />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                        />
                        {error && <div> <p style={{color: "white"}}>{error}</p> </div>}
                    </div>
                    <input type="submit" value="Sign In" className="sign-in-button" />
                    <a href="#0" className="forgot-password">Forgot your password?</a>
                    <Link className="new-here" to='/signup'>New here? Sign up now</Link>
                </form>          
            </div>
        </div>
    )
}

export default Login
