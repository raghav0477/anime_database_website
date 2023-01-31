import { useState, useEffect } from "react";

import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`).then((res) =>
      res.json()
    );
    setTopAnime(temp.data.slice(0, 5));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(search);
    fetchAnime(search);
  };

  const fetchAnime = async (search) => {
  	const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=10`)
  		.then(res => res.json());

    console.log("thostres", temp.data);
  	setAnimeList(temp.data);
    // console.log(animeList);
  }

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
