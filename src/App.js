import { Home } from "./components"
import { Login } from "./components"
import { Signup } from "./components";
import { MainPage } from "./components";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { React, useState, useEffect } from "react";

function App() {
  const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		SetTopAnime(temp.top.slice(0, 48));
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=50`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}

	useEffect(() => {
		GetTopAnime();
	}, []);

  // console.log(topAnime)

	
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        {/* <Route exact path='/singlepage' element={<SinglePage/>} /> */}
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/home' element={<MainPage
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
					  animeList={animeList}
            topAnime={topAnime}
        />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
