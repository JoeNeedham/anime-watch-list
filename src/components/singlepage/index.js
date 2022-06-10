import { React, useEffect, useState } from 'react'
import { MainNavBar } from '../index'
import './singlepage.css'


function SinglePage(props) {
    // const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // setLoading(true);
        console.log('loading');
        // props.singleAnime ? setLoading(false) : setLoading(true);
        console.log(props.singleAnime)
    },[props.singleAnime])

    return (
        <div className="wrapper">
            <div className="sp-section">
                <div className="sp-subsection">
                    {/* <img src={props.singleAnime.data.images.jpg.image_url} alt="" /> */}
                    { props.singleAnime && <img src={props.singleAnime.data.images.jpg.image_url}/> }
                </div>
                <div className="sp-subsection">

                </div>
            </div>
        </div>
    ) 
}

export default SinglePage