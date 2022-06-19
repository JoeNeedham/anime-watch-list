import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    
    const [Login, setLogin] = useState(false)

    const handleClick = () => {
        setLogin(true);
    }

    return (
    <div className="nav">
        <div className="nav_content">
            <div className="social_content">
                    <ul className="social_icons_list">
                        <li className="social_icons_list_item">
                            <i className="fa-brands fa-instagram icon"></i>
                        </li>
                        <li className="social_icons_list_item">
                            <i className="fa-brands fa-twitter icon"></i>
                        </li>
                        <li className="social_icons_list_item ">
                            <i className="fa-brands fa-tiktok icon"></i>
                        </li>         
                    </ul>
                </div>
            
            <div className="nav_links_content">
            { !Login ? 
                <ul className="nav_link_list">
                    <li><Link style={{textDecoration: 'none', color: '#afafaf'}}to='/'>Home</Link></li>
                    <li><Link style={{textDecoration: 'none', color: '#afafaf'}}to='/login'>Sign In</Link></li>                       
                </ul>
                : null }
            </div>
        </div>
    </div>
    )
}

export default Navbar