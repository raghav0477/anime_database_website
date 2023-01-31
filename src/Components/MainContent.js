import React from "react";
// import AnimeCard from './AnimeCard';

function MainContent(props) {
  return (
    <main>
      <div className="main-head">
        <form className="search-bar" onSubmit={props.handleSearch}>
          <input
            type="search"
            placeholder="Search for an anime..."
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {/* {props.animeList} */}
        {props.animeList.map((anime) => (
          <div className="anime-card">
            {/* <p>{anime.title}</p> */}
            <a href={anime.url} target="_blank" rel="noreferrer">
              <figure>
                <img src={anime.images.jpg.image_url} alt="ima" />
              </figure>
              <h3>{anime.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainContent;
