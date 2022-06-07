import React from 'react'
import './animecard.css'

function AnimeCard({anime}) {
	return (
		<div className="anime-card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.image_url} 
						alt="Anime Image" />
				</figure>
				<h3>{ anime.title }</h3>
			</a>
		</div>
	)
}

export default AnimeCard
