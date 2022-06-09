import { React, useState } from 'react'
import { MainNavBar } from '../index'
import './mainpage.css'
import { AnimeCard } from '../index'


function MainPage(props) {
    const [single, setSingle] = useState([]);

	const onClickHandler = async (id) => {
		const data = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
			.then(res => res.json());
			setSingle(data)
			console.log(single)
	}
    if(!props.search){
        return (
            <div className="wrapper">
            <MainNavBar
            HandleSearch={props.HandleSearch}
            search={props.search}
            SetSearch={props.SetSearch}
            />
                {/* <div className='m-title'>
                    <h1>What Are You Watching?</h1>
                </div> */}
                <div className='section'>
                    <div className='movies'>
                        {props.topAnime.map(anime => (
                            <AnimeCard
                                anime={anime}
                                key={anime.mal_id}
                                onclickhandler={onClickHandler} />
                        ))}                
                    </div>
                    {/* <div className='movies'>
                        {props.animeList.map(anime => (
                            <AnimeCard
                                anime={anime}
                                key={anime.mal_id} />
                        ))}                
                    </div> */}
                </div>
            </div>
        )
    } else
    return (
        <div className="wrapper">
            <MainNavBar
            HandleSearch={props.HandleSearch}
            search={props.search}
            SetSearch={props.SetSearch}
            />
            {/* <div className='m-title'>
                <h1>What Are You Watching?</h1>
            </div> */}
            <div className='section'>
                <div className='movies'>
                    {props.animeList.map(anime => (
                        <AnimeCard
                            anime={anime}
                            key={anime.mal_id}
                            onclickhandler={onClickHandler}
                            />
                    ))}                
                </div>
            </div>
        </div>
    )
}

export default MainPage
