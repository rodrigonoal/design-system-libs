import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar'
import Searchbox from './components/searchbox';
import Bigcard from './components/card';
import getPokemon from './utilities/pokeAPI'
import "./App.css";
import { useLocalStorage } from 'react-use';






export default function App() {
  const [cacheSearch, setCacheSearch, removeCacheSearch] = useLocalStorage('pokemonSearch', []);
  const [pokemon, setPokemon] = useState({});
  const [search, setSearch] = useState('');


  useEffect(() => {
    saveInCache();
  }, [pokemon]);

  function checkInCache() {
    return cacheSearch.find(item => item.name === search)
  };

  function saveInCache() {
    setCacheSearch([...cacheSearch, pokemon])
  };

  async function handleFindPokemon() {
    const result = checkInCache();

    if (result) {
      return setPokemon(result);
    } else {
      try {
        const pokemon = await getPokemon(search);

        setPokemon(pokemon)
      } catch (error) {
        console.log(error.message)
      };
    };
  };



  return (
    <>
      <Navbar />
      <div className="App">
        <Bigcard
          pokemon={pokemon}
        />
      </div>
      <Searchbox
        search={search}
        setSearch={setSearch}
        handleFindPokemon={handleFindPokemon} />
    </>
  );
};
