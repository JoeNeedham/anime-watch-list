import { React, useEffect, useState } from 'react'
import './singlepage.css'


function SinglePage(props) {
    // const [loading, setLoading] = useState([]);
    
    useEffect(() => {
            // setLoading(true);
            console.log(props.singleAnime.data.title);
        // props.singleAnime ? setLoading(false) : setLoading(true);
    },[props.singleAnime]);

    return (
        <div className="wrapper">
            <div className="sp-section">
                <div className="sp-subsection">
                    {/* <img src={props.singleAnime.data.images.jpg.image_url} alt="" /> */}
                    { props.singleAnime ? <img src={props.singleAnime.data.images.jpg.image_url}/> : null }
                </div>
                <div className="sp-subsection">

                </div>
            </div>
        </div>
    ) 
}

export default SinglePage