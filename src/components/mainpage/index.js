import React from 'react'
import { MainNavBar } from '../index'
import './mainpage.css'


function MainPage() {
    return (
        <div className="wrapper">
        <MainNavBar />
            <div className='m-title'>
                <h1>What Are You Watching?</h1>
            </div>
            <div className='section'>
                <div className='movies'>
                    <h2 style={{color: "white"}}>ANIME</h2>
                </div>
                <div className='movie-details'>
                    <h2 style={{color: "white"}}>ANIME DETAILS</h2>
                </div>
            </div>
        </div>
    )
}

export default MainPage
