import { React, useEffect, useState } from 'react'
import './singlepage.css'


function SinglePage(props) {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
            if(props.singleAnime) {
                setTimeout(() => {
                    setLoading(false);
                    }, 2000);
            }
    },[props.singleAnime]);

    if(loading === true) {
        return <h1>LOADING</h1>
    } else

    return (
        <div className="wrapper">
            <div className="sp-section">
                <div className="sp-subsection">
                    <img src={props.singleAnime.data.images.jpg.image_url} alt="" />
                </div>
                <div className="sp-subsection">

                </div>
            </div>
        </div>
    ) 
}

export default SinglePage