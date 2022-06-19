import axios from 'axios';
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar} from '../index'
import './signup.css'


function Signup() {

    const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
	});
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/home");
            console.log(res.message);
        } catch (error) {
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
        }
    };

    return (
        <div className="wrapper">
            <Navbar />
            <div>
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="username">Username</label>
                        <input
                        type="username"
                        name="username"
                        onChange={handleChange}
                        value={data.username}
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
                        {error &&  <div> <p style={{color: "white"}}>{error}</p> </div>}
                    </div>
                    <input type="submit" value="Create Account" className="button" />
                </form>          
            </div>
        </div>
    )
}

export default Signup
