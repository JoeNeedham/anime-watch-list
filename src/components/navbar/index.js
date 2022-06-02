import React from 'react'
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
                    <li><a href="#" class="nav_link active">Sign In</a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Navbar