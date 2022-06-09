import { React } from 'react'
import { Link } from 'react-router-dom'
import './mainnavbar.css'


function MainNavBar(props) {
 
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
            <form onSubmit={props.HandleSearch}>
                <div className="search-bar">
                    <input
                    type="text"
                    placeholder='SEARCH ANIME'
                    name='search'
                    value={props.search}
					onChange={e => props.SetSearch(e.target.value)}
                    />
                </div>
            </form>
            <div className="nav_links_content">
                <ul className="nav_link_list">
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