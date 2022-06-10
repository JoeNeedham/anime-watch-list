import { Home } from "./components"
import { Login } from "./components"
import { Signup } from "./components";
import { MainPage } from "./components";
import { SinglePage } from "./components";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { React, useState, useEffect } from "react";

function App() {
  const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");
  const [single, setSingle] = useState([]);

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

	const onClickHandler = async (id) => {
		const data = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
			.then(res => res.json());
			setSingle(data)
			console.log(single)
	}

	useEffect(() => {
		GetTopAnime();
	}, []);


  // console.log(topAnime)

	
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/singlepage' element={<SinglePage
          singleAnime={single}
          />}
          />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/home' element={<MainPage
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
					  animeList={animeList}
            topAnime={topAnime}
            onclickhandler={onClickHandler}
        />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
