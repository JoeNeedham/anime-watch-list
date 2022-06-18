import { React, useEffect, useState } from 'react'
import { Navbar } from '../index';
import './singlepage.css'
import loader from './output-onlinegiftools.gif'


function SinglePage(props) {
    const [loading, setLoading] = useState(true);
    // const [refresh, setRefresh] = useState([]);

    
    
    useEffect(() => {
            if(props.singleAnime) {
                setTimeout(() => {
                    setLoading(false);
                    }, 2000);
            }
            // console.log(props.singleAnime)
            // setRefresh(props.singleAnime)

    },[props.singleAnime]);

    if(loading === true) {
        return <div className='wrapper'>
            <div className="loader">
                <img src={loader} alt="" />
            </div>
        </div>
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