import React, { useState } from 'react';
import { Checkbox, Button, VStack } from '@chakra-ui/react';

const FilterOptions = ({ abilities, characteristics, onAbilityFilter, onCharacteristicFilter }) => {
  const [selectedAbilities, setSelectedAbilities] = useState([]);
  const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);

  const handleAbilityChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedAbilities((prevAbilities) => [...prevAbilities, value]);
    } else {
      setSelectedAbilities((prevAbilities) => prevAbilities.filter((ability) => ability !== value));
    }
  };

  const handleCharacteristicChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCharacteristics((prevCharacteristics) => [...prevCharacteristics, value]);
    } else {
      setSelectedCharacteristics((prevCharacteristics) => prevCharacteristics.filter((char) => char !== value));
    }
  };

  const applyFilter = () => {
    onAbilityFilter(selectedAbilities);
    onCharacteristicFilter(selectedCharacteristics);
  };

  return (
    <VStack align="flex-start" spacing={2}>
      <h3>Filter by Abilities:</h3>
      {abilities.map((ability) => (
        <Checkbox
          key={ability}
          value={ability}
          isChecked={selectedAbilities.includes(ability)}
          onChange={handleAbilityChange}
        >
          {ability}
        </Checkbox>
      ))}
      
      {characteristics && characteristics.length > 0 && (
        <>
          <h3>Filter by Characteristics:</h3>
          {characteristics.map((characteristic) => (
            <Checkbox
              key={characteristic}
              value={characteristic}
              isChecked={selectedCharacteristics.includes(characteristic)}
              onChange={handleCharacteristicChange}
            >
              {characteristic}
            </Checkbox>
          ))}
        </>
      )}

      <Button colorScheme="blue" onClick={applyFilter}>Apply Filter</Button>
    </VStack>
  );
};

export default FilterOptions;
