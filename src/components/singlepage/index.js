import { React, useEffect, useState } from 'react'
import { Navbar } from '../index';
import './singlepage.css'


function SinglePage(props) {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
            if(props.singleAnime) {
                setTimeout(() => {
                    setLoading(false);
                    }, 2000);
            }
            console.log(props.singleAnime)
    },[props.singleAnime]);

    if(loading === true) {
        return <h1>LOADING</h1>
    } else

    return (
        <div className="wrapper">
            <Navbar />
            <div className="sp-section">
                <div className="sp-subsection">
                    <p>Genre: {props.singleAnime.data.genres[0].name} &nbsp;//&nbsp;  Score: {props.singleAnime.data.score}</p>
                    <img className='single-anime-pic' src={props.singleAnime.data.images.jpg.image_url} alt="" />
                </div>
                <div className="sp-subsection2">
                    <p>{props.singleAnime.data.synopsis}</p>
                    <button className='add-button'>Add To List</button>
                </div>
            </div>
        </div>
    ) 
}

export default SinglePage