import React from 'react'

const Sidebar = ({ topAnime }) => {
  return (
    <aside>
        <nav>
            <h3>Top Anime</h3>
            <div className="top-list">
            { topAnime.map(anime=>(
              <a href={anime.url}
              target="_blank"
              key={anime.mal_id}
              rel="noopener noreferrer">
                {anime.title}
              </a>
            ))}
            </div>
            
        </nav>
    </aside>
  )
}

export default Sidebar