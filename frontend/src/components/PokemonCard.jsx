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
          <Image src={url} alt={pokemon.name} width={"230px"} height={"220px"} borderRadius={"10px"}></Image>
          <div>
            <h3>{pokemonName.toUpperCase()}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PokemonCard;
