import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Input, Button } from "@chakra-ui/react"
import UseToast from '../customHooks/UseToast';

const SearchPage = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toastMsg = UseToast();

  const handleSearch = async () => {
    try {
      // Making API call to search the Pokemon by name
      setLoading(true);
      setTimeout(async()=>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (response.ok) {
        // If the API call is successful, redirecting to the listing page with the search query parameter
        setLoading(false);
        toastMsg({
          title: "Pokemon list generated successfully",
          status: "success"
        });
        navigate(`/list?search=${pokemonName}`);
      } else {
        // If the API call fails, displaying an error message
        toastMsg({
          title: "Something went wrong with the API call or pokemon doesn't exist with this name. Search like ditto, bulbasaur etc. ",
          status: "error"
        });
        setLoading(false);
        console.log('Pokemon not found');
      }
      }, 3000)
      
    } catch (error) {
      console.log(error);
      toastMsg({
        title: `${error.message}`,
        status: "error"
      });
    }
  };


  return (
    <div>
      <Heading>Search Page</Heading>
      <Input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
      {loading ? <Button
        isLoading
        loadingText='Submitting, Please Wait...'
        colorScheme='teal'
        variant='outline'
      >
        Submit
      </Button> : <Button onClick={handleSearch}>Search</Button>}
    </div>
  );
};

export default SearchPage;
