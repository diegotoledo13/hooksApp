import React, { useState, useEffect, useReducer } from "react";
import css from "./character.module.css";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Character = () => {
  const [character, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };
  return (
    <div>
      <div className={css.favo}>
        {favorites.favorites.map((favorite) => (
          <img src={favorite.image} key={favorite.id} alt="" />
        ))}
      </div>
      <div className={css.container}>
        {character.map((character) => (
          <div key={character.id} className={css.card}>
            <h2>{character.name}</h2>
            <button type="button" onClick={() => handleClick(character)}>
              Agregar a Favoritos
            </button>
            <img src={character.image} />
            <p>{character.species}</p>
            <p>{character.status}</p>
            <p>{character.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Character;
