import { Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/PokemonCard.css";

const PokemonCard = ({ pokemonName, PokemonUrl, pokemon }) => {
  const [imageError, setImageError] = useState(false);

  let arr = PokemonUrl.split('/')
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonUrl.split('/')[6]}.png`
  let defaultUrl="https://www.analyticdesign.com/wp-content/uploads/2018/07/unnamed.gif"

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <Link to={`/pokemon/${pokemon.name}`}>
        <div className="pokemon-card">
          <Image src={imageError?defaultUrl:url} alt={pokemon.name} onError={handleImageError} width={"230px"} height={"220px"} marginLeft="25px" borderRadius={"10px"}></Image>
          <div>
            <h3>{pokemonName.toUpperCase()}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PokemonCard;
