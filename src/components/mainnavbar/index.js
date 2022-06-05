import React from 'react'
import { Link } from 'react-router-dom'
import './mainnavbar.css'

function MainNavBar() {
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
            <div className="search-bar">
                <input type="text" placeholder='SEARCH ANIME' name='search'/>
            </div>
            <div class="nav_links_content">
                <ul class="nav_link_list">
                    <li><Link style={{textDecoration: 'none', color: '#afafaf'}}to='/'>Home</Link></li>
                    <li><Link style={{textDecoration: 'none', color: '#afafaf'}}to='/'>My Anime List</Link></li>
                    <li><Link style={{textDecoration: 'none', color: '#afafaf'}}to='/login'>Sign Out</Link></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default MainNavBar