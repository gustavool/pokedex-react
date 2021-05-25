import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  SideLeftBoard,
  SideRightBoard,
  TypeBar,
  Title,
  Number,
} from './styles';

export default function PokeData() {
  const { id } = useParams();

  const [dataSpeciePoke, setSpeciePoke] = useState({});
  const [dataPoke, setDataPoke] = useState({});
  const [evoPoke, setEvoPoke] = useState({});
  const [genderPoke, setGenderPoke] = useState([]);

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

    setEvoPoke(await evoPokeRes.json());
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
    <Container key={dataPoke.order}>
      <SideLeftBoard type={dataPoke.types && dataPoke.types[0].type.name}>
        <ul>
          <Number>
            {dataSpeciePoke.id < 10 && `#00${dataSpeciePoke.id}`}
            {dataSpeciePoke.id >= 10 &&
              dataSpeciePoke.id < 100 &&
              `#0${dataSpeciePoke.id}`}
          </Number>
          <Title>{dataPoke.name}</Title>
          <li>
            <img
              src={
                dataPoke.sprites &&
                dataPoke.sprites.other['official-artwork'].front_default
              }
              alt='pokemon'
            />
          </li>
          <li>
            {dataPoke.types &&
              dataPoke.types.map(tipos => (
                <TypeBar key={tipos.type.name} type={tipos.type.name}>
                  {tipos.type.name}
                </TypeBar>
              ))}
          </li>
        </ul>
      </SideLeftBoard>
      <SideRightBoard>
        <div>
          Description:
          {dataPoke.name}
          {dataPoke.types && ` is ${dataPoke.types[0].type.name} `}
          {dataPoke.types &&
            dataPoke.types[1] &&
            `and ${dataPoke.types[1].type.name} `}
          type pokemon.
          {dataSpeciePoke.flavor_text_entries &&
            ` ${dataSpeciePoke.flavor_text_entries[0].flavor_text}`}
        </div>
        <div>
          <div>
            Data:
            <span>height: {dataPoke.height}</span>
            <span>weight: {dataPoke.weight}</span>
            <div>
              Gender:
              {genderPoke.includes(1) && 'female'}
              {genderPoke.includes(2) && 'male'}
              {genderPoke.includes(3) && 'genderless'}
            </div>
          </div>

          <div>
            Stats:
            {dataPoke.stats &&
              dataPoke.stats.map(stat => {
                return (
                  <span key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </span>
                );
              })}
          </div>
        </div>
        <div>
          Evolutions:
          {evoPoke.chain && evoPoke.chain.species.name}
          {evoPoke.chain &&
            evoPoke.chain.evolves_to.map(evolution => {
              return evolution.species.name;
            })}
          {evoPoke.chain &&
            evoPoke.chain.evolves_to[0] &&
            evoPoke.chain.evolves_to[0].evolves_to.map(nextEvo => {
              return nextEvo.species.name;
            })}
        </div>
      </SideRightBoard>
    </Container>
  );
}
