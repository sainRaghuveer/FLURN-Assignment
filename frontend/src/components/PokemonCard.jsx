import { Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/PokemonCard.css";

const PokemonCard = ({ pokemonName, PokemonUrl, pokemon }) => {
  let arr = PokemonUrl.split('/')
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonUrl.split('/')[6]}.png`
  return (
    <>
      <Link to={`/pokemon/${pokemon.name}`}>
        <div className="pokemon-card">
          <Image src={url} alt={pokemon.name} width={"250px"} height={"150px"} borderRadius={"10px"}></Image>
          <h3>{pokemonName}</h3>
        </div>
      </Link>
    </>
  );
};

export default PokemonCard;
