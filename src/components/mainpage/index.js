import React from 'react'
import { MainNavBar } from '../index'
import './mainpage.css'
import { AnimeCard } from '../index'


function MainPage(props) {
    return (
        <div className="wrapper">
        <MainNavBar />
            {/* <div className='m-title'>
                <h1>What Are You Watching?</h1>
            </div> */}
            <div className='section'>
                <div className='movies'>
                    {props.topAnime.map(anime => (
                        <AnimeCard
                            anime={anime}
                            key={anime.mal_id} />
                    ))}                
                </div>
            </div>
        </div>
    )
}

export default MainPage
