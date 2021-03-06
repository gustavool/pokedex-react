import React, { useEffect, useState } from 'react';

import Thumb from '../../components/Thumb';

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

    function getEachPokemon(results) {
      results.forEach(async pokemon => {
        const resPoke = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        );
        const dataPoke = await resPoke.json();

        setAllPokemons(currentList => [...currentList, dataPoke]);
      });
    }
    getEachPokemon(dataList.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <Container>
      <Dashboard>
        <div>
          {allPokemons
            .sort((a, b) => a.id - b.id)
            .map(pokemon => (
              <Thumb
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other['official-artwork'].front_default}
                types={
                  pokemon.types && pokemon.types.map(tipos => tipos.type.name)
                }
              />
            ))}
        </div>
        <Button type='submit' onClick={() => getAllPokemons()}>
          <strong>Load more +20</strong>
        </Button>
      </Dashboard>
    </Container>
  );
}
