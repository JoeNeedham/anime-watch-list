import { React } from 'react'
import { Link } from 'react-router-dom'
import './animecard.css'

function AnimeCard({anime, onclickhandler}) {
	const { mal_id } = anime
	return (
		<div className="anime-card">
			<Link to='/singlepage'
				onClick={()=> onclickhandler(mal_id)}
			>
				<figure>
					<img 
						src={anime.image_url} 
						alt=""/>
				</figure>
				<h3>{ anime.title }</h3>
			</Link>
		</div>
	)
}

export default AnimeCard
