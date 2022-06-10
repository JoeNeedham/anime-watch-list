import { React } from 'react'
import { MainNavBar } from '../index'
import './mainpage.css'
import { AnimeCard } from '../index'


function MainPage(props) {
    if(!props.search){
        return (
            <div className="wrapper">
                <MainNavBar
                HandleSearch={props.HandleSearch}
                search={props.search}
                SetSearch={props.SetSearch}
                />
                <div className='section'>
                    <div className='movies'>
                        {props.topAnime.map(anime => (
                            <AnimeCard
                                anime={anime}
                                key={anime.mal_id}
                                onclickhandler={props.onclickhandler} />
                        ))}                
                    </div>
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
            <div className='section'>
                <div className='movies'>
                    {props.animeList.map(anime => (
                        <AnimeCard
                            anime={anime}
                            key={anime.mal_id}
                            onclickhandler={props.onclickhandler}
                            />
                    ))}                
                </div>
            </div>
        </div>
    )
}

export default MainPage
