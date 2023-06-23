import React, { useState } from 'react';
import { Checkbox, Button, VStack } from '@chakra-ui/react';
import axios from "axios"

const FilterOptions = ({ abilities, species, onAbilityFilter, onSpeciesFilter, filteredData }) => {
  // const [selectedAbilities, setSelectedAbilities] = useState([]);
  // const [selectedSpecies, setSelectedSpecies] = useState([]);

  // const handleAbilityChange = (event) => {
  //   const { value, checked } = event.target;

  //   if (checked) {
  //     setSelectedAbilities((prevAbilities) => [...prevAbilities, value]);
  //   } else {
  //     setSelectedAbilities((prevAbilities) => prevAbilities.filter((ability) => ability !== value));
  //   }
  // };

  // const handleSpeciesChange = (event) => {
  //   const { value, checked } = event.target;

  //   if (checked) {
  //     setSelectedSpecies((prevSpecies) => [...prevSpecies, value]);
  //   } else {
  //     selectedSpecies((prevSpecies) => prevSpecies.filter((char) => char !== value));
  //   }
  // };

  const getDatas = async (ids) => {
    try {
      const reqs = ids.map(id => axios.get(`https://pokeapi.co/api/v2/ability/${id}/`))
      const res = await Promise.allSettled(reqs);
      let values = []
      res.forEach(el => {
        if (el.status === 'fulfilled') values = [...values, ...el.value.data.pokemon];
      })
      values = values.map(el => el.pokemon);
      filteredData(values);
      console.log('values', values)
    } catch (error) {
      console.log('error', error);
    }
  }

  const applyFilter = () => {
    const selectedAbilities = [];
    document.querySelectorAll('input[type="checkbox"]').forEach(el => {
      if (el.checked) selectedAbilities.push(el.value);
    });
    getDatas(selectedAbilities);
    // onAbilityFilter(selectedAbilities);  
    // onSpeciesFilter(selectedSpecies);
  };

  return (
    <VStack align="flex-start" spacing={2}>
      <h3>Filter by Abilities:</h3>
      {abilities.map((ability) => (
        <Checkbox
          key={ability}
          value={ability.id}
        >
          {ability.name}
        </Checkbox>
      ))}

      {/* {species && species.length > 0 && (
        <>
          <h3>Filter by Species:</h3>
          {species.map((species) => (
            <Checkbox
              key={species}
              value={species.id}
              isChecked={selectedSpecies.includes(species)}
              onChange={handleSpeciesChange}
            >
              {species.name}
            </Checkbox>
          ))}
        </>
      )} */}

      <Button colorScheme="blue" onClick={applyFilter}>Apply Filter</Button>
    </VStack>
  );
};

export default FilterOptions;
