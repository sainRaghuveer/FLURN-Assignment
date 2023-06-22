import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import "../styles/ListingPage.css"
import { Box, Spinner } from '@chakra-ui/react';
import { SkeletonE } from '../components/Skeleton';

const ListingPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPokemonList = async (page) => {
    setIsLoading(true);
    setError(null);

    try {
      setIsLoading(true);
      setTimeout(async () => {
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
      }, 2000)
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


  return isLoading ?<SkeletonE/>: (
    <Box display="grid" gap={"20px"} gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", xl: "repeat(4, 1fr)", "2xl": "repeat(4, 1fr)" }}>
      {pokemonList.map((pokemon, index) => (
        // console.log(pokemon)
        <PokemonCard key={`${pokemon.name}+${index}`} pokemonName={pokemon.name} PokemonUrl={pokemon.url} pokemon={pokemon} />
      ))}
    </Box>
  );
};

export default ListingPage;
