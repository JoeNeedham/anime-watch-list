import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
    <div class="nav">
        <div class="nav_content">
            <div class="social_content">
                    <ul class="social_icons_list">
                        <li class="social_icons_list_item">
                            <i class="fa-brands fa-instagram icon"></i>
                        </li>
                        <li class="social_icons_list_item">
                            <i class="fa-brands fa-twitter icon"></i>
                        </li>
                        <li class="social_icons_list_item ">
                            <i class="fa-brands fa-tiktok icon"></i>
                        </li>         
                    </ul>
                </div>
            <div class="nav_links_content">
                <ul class="nav_link_list">
                    <li><Link style={{textDecoration: 'none', color: '#afafaf'}}to='/login'>Sign In</Link></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Navbar