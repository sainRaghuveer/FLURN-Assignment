import { Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/PokemonCard.css";

const PokemonCard = ({ pokemonName, PokemonUrl, pokemon }) => {
  let arr = PokemonUrl.split('/')
  console.log(arr);
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${PokemonUrl.split('/')[6]}.png`
  console.log(url);
  return (
    <>
      <Link to={`/pokemon/${pokemon.name}`}>
        <div className="pokemon-card">
          <Image src={url} alt={pokemon.name} width={"100%"} height={"90%"}></Image>
          <h3>{pokemonName}</h3>
        </div>
      </Link>
    </>
  );
};

export default PokemonCard;
