import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Board from '../../components/Board';
import Information from '../../components/Information';

import { Container, BackButton, ArrowBar, Arrow } from './styles';

export default function PokeData() {
  const { id } = useParams();

  const [dataSpeciePoke, setSpeciePoke] = useState({});
  const [dataPoke, setDataPoke] = useState({});
  const [genderPoke, setGenderPoke] = useState([]);
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
    <>
      <Container key={id}>
        <BackButton>
          <Link to='/'>
            <FiArrowLeft size={24} />
            <strong>Go back</strong>
          </Link>
        </BackButton>
        <div>
          {dataPoke.name && (
            <Board
              id={id}
              name={dataPoke.name}
              types={dataPoke.types.map(tipos => tipos.type.name)}
              image={dataPoke.sprites.other['official-artwork'].front_default}
            />
          )}
          {dataPoke.name &&
            dataSpeciePoke.flavor_text_entries &&
            genderPoke && (
              <Information
                name={dataPoke.name}
                types={
                  dataPoke.types && dataPoke.types.map(tipos => tipos.type.name)
                }
                flavor={` ${
                  dataSpeciePoke.flavor_text_entries[0].language.name === 'en'
                    ? dataSpeciePoke.flavor_text_entries[0].flavor_text
                    : dataSpeciePoke.flavor_text_entries[1].flavor_text
                }`}
                height={dataPoke.height}
                weight={dataPoke.weight}
                genders={genderPoke}
                stats={dataPoke.stats}
                evolutions={imgEvoPoke}
              />
            )}
        </div>
        <ArrowBar>
          <Arrow href={`/pokemon/${id === 1 ? 1 : id - 1}`}>
            <div>
              <FiChevronLeft size={48} />
              <strong>Before</strong>
            </div>
          </Arrow>
          <Arrow href={`/pokemon/${Number(id) + 1}`}>
            <div>
              <strong>Next</strong>
              <FiChevronRight size={48} />
            </div>
          </Arrow>
        </ArrowBar>
      </Container>
    </>
  );
}
