import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './animecard.css'

function AnimeCard({anime}) {
	const [single, setSingle] = useState([]);

	const onClickHandler = async () => {
		const data = await fetch(`https://api.jikan.moe/v4/anime/${anime.mal_id}`)
			.then(res => res.json());
			setSingle(data)
			console.log(single)
	}
	
	return (
		<div className="anime-card">
			<Link to=''
				onClick={onClickHandler}
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
