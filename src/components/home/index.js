import React from 'react'
import { Navbar } from '../index'
import './home.css'


function Home() {
    return (
        <div className="wrapper">
            <Navbar />
            <div className="title">
                <h1>ANIME HOARDER</h1>
                <h2>WHAT ARE YOU WATCHING NEXT?</h2>
            </div>
        </div>
    )
}

export default Home
