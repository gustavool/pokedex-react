/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Board from '../../components/Board';
import Information from '../../components/Information';

import { Container } from './styles';

export default function PokeData() {
  const { id } = useParams();

  const [dataSpeciePoke, setSpeciePoke] = useState({});
  const [dataPoke, setDataPoke] = useState({});
  const [genderPoke, setGenderPoke] = useState([]);
  const [evoPoke, setEvoPoke] = useState({});
  const [imgEvoPoke, setImgEvoPoke] = useState([]);

  const getDataPokemon = async () => {
    const dataPokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    setDataPoke(await dataPokeRes.json());
  };

  const getSpeciePokemon = async () => {
    const speciePokeRes = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`,
    );
    setSpeciePoke(await speciePokeRes.json());
  };

  const getPokemonEvolution = async () => {
    const evoPokeRes = await fetch(
      dataSpeciePoke.evolution_chain && dataSpeciePoke.evolution_chain.url,
    );

    const evoPokeData = await evoPokeRes.json();

    const evoPokeList = [
      evoPokeData.chain.species.name,
      ...(evoPokeData.chain &&
        evoPokeData.chain.evolves_to.map(evolution => evolution.species.name)),
    ];
    if (
      evoPokeData.chain &&
      evoPokeData.chain.evolves_to[0] &&
      evoPokeData.chain.evolves_to[0].evolves_to[0]
    ) {
      evoPokeList.push(
        evoPokeData.chain.evolves_to[0].evolves_to[0].species.name,
      );
    }

    setEvoPoke(evoPokeList);

    function getImgPoke(evolutions) {
      evolutions.forEach(async evolution => {
        const imgPokeRes = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${evolution}`,
        );
        const imgPoke = await imgPokeRes.json();

        setImgEvoPoke(imgList => [...imgList, imgPoke]);
      });
    }

    getImgPoke(evoPokeList);
  };

  async function verifyGenderPokemon() {
    const gendersType = [1, 2, 3]; // 1-female 2-male 3-genderless

    gendersType.forEach(async gender => {
      const genderPokeRes = await fetch(
        `https://pokeapi.co/api/v2/gender/${gender}`,
      );
      const gendersPoke = await genderPokeRes.json();

      gendersPoke.pokemon_species_details.forEach(namePoke => {
        if (namePoke.pokemon_species.name === dataPoke.name) {
          setGenderPoke(prevArray => [...prevArray, gendersPoke.id]);
        }
      });
    });
  }

  useEffect(() => {
    getDataPokemon();
  }, []);

  useEffect(() => {
    getSpeciePokemon();
  }, []);

  useEffect(() => {
    getPokemonEvolution();
  }, [dataSpeciePoke]);

  useEffect(() => {
    verifyGenderPokemon();
  }, [dataPoke]);

  return (
    <Container key={id}>
      {dataPoke.name && (
        <Board
          id={id}
          name={dataPoke.name}
          types={dataPoke.types.map(tipos => tipos.type.name)}
          image={dataPoke.sprites.other['official-artwork'].front_default}
        />
      )}
      {dataPoke.name && dataSpeciePoke.flavor_text_entries && genderPoke && (
        <Information
          name={dataPoke.name}
          types={dataPoke.types && dataPoke.types.map(tipos => tipos.type.name)}
          flavor={` ${dataSpeciePoke.flavor_text_entries[0].flavor_text}`}
          height={dataPoke.height}
          weight={dataPoke.weight}
          genders={genderPoke}
          stats={dataPoke.stats}
          evolutions={imgEvoPoke}
        />
      )}
    </Container>
  );
}
