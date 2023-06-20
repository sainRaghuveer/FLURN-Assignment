import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';

const ListingPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPokemonList = async (page) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${(page - 1) * 10}`);
      if (response.ok) {
        const data = await response.json();
        console.log("data", data)
        setPokemonList((prevList) => [...prevList, ...data.results]);
        setCurrentPage(page);
        setIsLoading(false);
      } else {
        setError('Error occurred while fetching Pokemon list');
        setIsLoading(false);
      }
    } catch (error) {
      setError('Error occurred while fetching Pokemon list');
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      if (!isLoading && !error) {
        fetchPokemonList(currentPage + 1);
      }
    }
  };

  useEffect(() => {
    fetchPokemonList(currentPage);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, error]);


  return (
    <div>
      <h1>Listing Page</h1>
      {pokemonList.map((pokemon, index) => (
        // console.log(pokemon)
        <PokemonCard key={`${pokemon.name}+${index}`} pokemonName={pokemon.name} PokemonUrl={pokemon.url} pokemon={pokemon}/>
      ))}
    </div>
  );
};

export default ListingPage;
