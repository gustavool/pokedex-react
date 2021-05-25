import React, { useEffect, useState } from 'react';

import PokemonThumb from '../PokemonThumb';

import { Button, Container, Dashboard } from './styles';

export default function Pokedex() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20',
  );

  const getAllPokemons = async () => {
    const resList = await fetch(loadMore);
    const dataList = await resList.json();

    setLoadMore(dataList.next);

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const resPoke = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        );
        const dataPoke = await resPoke.json();

        setAllPokemons(currentList => [...currentList, dataPoke]);
      });
    }
    createPokemonObject(dataList.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <Container>
      <h1>Pokemon Evolution</h1>
      <Dashboard>
        <div>
          {allPokemons
            .sort((a, b) => a.id - b.id)
            .map(pokemon => (
              <PokemonThumb
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other['official-artwork'].front_default}
                type={
                  pokemon.types && pokemon.types.map(tipos => tipos.type.name)
                }
              />
            ))}
        </div>
        <Button type='submit' onClick={() => getAllPokemons()}>
          Load more
        </Button>
      </Dashboard>
    </Container>
  );
}
