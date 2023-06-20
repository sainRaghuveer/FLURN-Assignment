import { Image } from '@chakra-ui/react';
import React from 'react';
import "../styles/PokemonCard.css";

const PokemonCard = ({ pokemonName, PokemonUrl, pokemon }) => {
  let arr=PokemonUrl.split('/')
  console.log(arr);
  let url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${PokemonUrl.split('/')[6]}.png`
  console.log(url);
  return (
    <div className="pokemon-card">
      <h3>{pokemonName}</h3>
      <Image src={url} alt={pokemon.name}></Image>
      {/* Add additional information about the Pokemon */}
      {/* <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p> */}
      {/* Display more details as needed */}
    </div>
  );
};

export default PokemonCard;
