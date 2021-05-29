import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  SideLeftBoard,
  SideRightBoard,
  TypeBar,
  Title,
  Number,
  Description,
  Data,
  Stat,
  Name,
  Evolution,
} from './styles';

export default function PokeData() {
  const { id } = useParams();

  const [dataSpeciePoke, setSpeciePoke] = useState({});
  const [dataPoke, setDataPoke] = useState({});
  const [evoPoke, setEvoPoke] = useState({});
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
    console.log(
      evoPokeData.chain.evolves_to.length > 0 &&
        evoPokeData.chain.evolves_to[0],
    );
    const evoPokeList = [
      evoPokeData.chain.species.name,
      ...(evoPokeData.chain &&
        evoPokeData.chain.evolves_to.map(evolution => evolution.species.name)),
      // ...(evoPokeData.chain &&
      //   evoPokeData.chain.evolves_to[0] &&
      //   evoPokeData.chain.evolves_to[0].evolves_to.map(
      //     nextEvo => nextEvo.species.name,
      //   )),
    ];

    // evoPokeList = evoPokeData.chain.evolves_to.length > 0 && [
    //   ...evoPokeList,
    //   ...evoPokeData.chain.evolves_to[0].evolves_to.map(
    //     nextEvo => nextEvo.species.name,
    //   ),
    // ];

    setEvoPoke(evoPokeList);

    function getImgPoke(evolutions) {
      evolutions.forEach(async evolution => {
        const imgPokeRes = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${evolution}`,
        );
        const imgPoke = await imgPokeRes.json();
        const imgLink =
          imgPoke.sprites &&
          imgPoke.sprites.other['official-artwork'].front_default;
        setImgEvoPoke(imgList => [...imgList, imgLink]);
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

  console.log(imgEvoPoke);

  return (
    <Container key={dataPoke.order}>
      <SideLeftBoard type={dataPoke.types && dataPoke.types[0].type.name}>
        <Number>
          {dataSpeciePoke.id < 10 && `#00${dataSpeciePoke.id}`}
          {dataSpeciePoke.id >= 10 &&
            dataSpeciePoke.id < 100 &&
            `#0${dataSpeciePoke.id}`}
        </Number>
        <Name>{dataPoke.name}</Name>
        <img
          src={
            dataPoke.sprites &&
            dataPoke.sprites.other['official-artwork'].front_default
          }
          alt='pokemon'
        />
        <div>
          {dataPoke.types &&
            dataPoke.types.map(tipos => (
              <TypeBar key={tipos.type.name} type={tipos.type.name}>
                {tipos.type.name}
              </TypeBar>
            ))}
        </div>
      </SideLeftBoard>
      <SideRightBoard>
        <Title>Description</Title>
        <Description>
          <p>
            {dataPoke.name}
            {dataPoke.types && ` is ${dataPoke.types[0].type.name} `}
            {dataPoke.types &&
              dataPoke.types[1] &&
              `and ${dataPoke.types[1].type.name} `}
            type pokemon.
            {dataSpeciePoke.flavor_text_entries &&
              ` ${dataSpeciePoke.flavor_text_entries[0].flavor_text}`}
          </p>
        </Description>
        <Title>Data</Title>
        <Data>
          <div>
            height: <p>{dataPoke.height}</p>
          </div>
          <div>
            weight: <p>{dataPoke.weight}</p>
          </div>
          <div>
            Gender:
            {genderPoke.includes(1) && <p>female</p>}
            {genderPoke.includes(2) && <p>male</p>}
            {genderPoke.includes(3) && <p>genderless</p>}
          </div>
        </Data>
        <Title>Stats</Title>
        <Stat>
          {dataPoke.stats &&
            dataPoke.stats.map(stat => {
              return (
                <div key={stat.stat.name}>
                  {stat.stat.name}: <p>{stat.base_stat}</p>
                </div>
              );
            })}
        </Stat>
        <Title>Evolutions</Title>
        <Evolution>
          {evoPoke.length && evoPoke.map(evolution => <p>{evolution}</p>)}
          {/* {imgEvoPoke.length &&
            imgEvoPoke.map(evoImg => <img src={evoImg} alt='pokemon' />)} */}
        </Evolution>
      </SideRightBoard>
    </Container>
  );
}
