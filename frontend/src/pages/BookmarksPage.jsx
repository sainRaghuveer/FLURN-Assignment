import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import style from "../styles/Bookmarks.module.css"


function BookmarksPage() {

  const [favoriteList, setFavoriteList] = useState([]);
  const [loading, setLoading] = useState(false)

  function getFavorites() {
    setLoading(true);
    setFavoriteList(JSON.parse(localStorage.getItem("favorites")) || []);
    setLoading(false);
  }

  const handleDoFavorite = (pokemon) => {
    const index = favoriteList.indexOf(pokemon);
    if (index !== -1) {
      favoriteList.splice(index, 1);
    } else {
      favoriteList.push(pokemon);
    }
    localStorage.setItem("favorites", JSON.stringify(favoriteList))
    getFavorites()
  }

  useEffect(() => {
    getFavorites();
  }, [])

  return loading ? <h1>Loading...</h1> : (
    <div className={style.pokemons}>
      {
        favoriteList?.map((pokemon, i) => <article key={i} className={style.pokemon}>
          <Link to={`/pokemon/${pokemon}`}>
            <h3>{pokemon}</h3>
            <p># {i + 1}</p>
          </Link>
          <span onClick={() => handleDoFavorite(pokemon)}>{favoriteList.includes(pokemon) ? <AiFillHeart /> : <AiOutlineHeart />}</span>
        </article>)
      }
    </div>
  )
}

export default BookmarksPage