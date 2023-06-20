import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Heading, Input, Button} from "@chakra-ui/react"

const SearchPage = () => {
  const [pokemonName, setPokemonName] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      // Make API call to search the Pokemon by name
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (response.ok) {
        // If the API call is successful, redirect to the listing page with the search query parameter
        navigate(`/list?search=${pokemonName}`);
      } else {
        // If the API call fails, display an error message
        console.log('Pokemon not found');
        // You can display an error message on the page or handle it in any other way you prefer
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <Heading>Search Page</Heading>
      <Input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchPage;
