import React from 'react';
import PropTypes, { number, string } from 'prop-types';

import {
  Container,
  Title,
  Description,
  Data,
  Stat,
  Evolution,
  Image,
} from './style';

export default function Information({
  name,
  types,
  flavor,
  height,
  weight,
  genders,
  stats,
  evolutions,
}) {
  return (
    <Container>
      <Title>Description</Title>
      <Description>
        <p>
          <strong>{name}</strong>
          {types && ` is ${types[0]} `}
          {types && types[1] && `and ${types[1]} `}
          type pokemon.
          {flavor}
        </p>
      </Description>
      <Title>Data</Title>
      <Data>
        <div>
          <p>
            <strong>height:</strong> {height}
          </p>
        </div>
        <div>
          <p>
            <strong>weight:</strong> {weight}
          </p>
        </div>
        <div>
          <strong>Gender:</strong>
          {genders.includes(1) && <p>female</p>}
          {genders.includes(2) && <p>male</p>}
          {genders.includes(3) && <p>genderless</p>}
        </div>
      </Data>
      <Title>Stats</Title>
      <Stat>
        {stats &&
          stats.map(stat => {
            return (
              <div key={stat.stat.name}>
                <p>
                  <strong>{stat.stat.name}:</strong> {stat.base_stat}
                </p>
              </div>
            );
          })}
      </Stat>
      <Title>Evolutions</Title>

      <Evolution>
        {evolutions
          .sort((a, b) => a.id - b.id)
          .map(pokeEvoInfo => (
            <a href={`/pokemon/${pokeEvoInfo.id}`}>
              <div key={pokeEvoInfo.id}>
                {pokeEvoInfo.sprites && (
                  <Image
                    key={pokeEvoInfo.name}
                    type={pokeEvoInfo.types[0].type.name}
                    src={
                      pokeEvoInfo.sprites.other['official-artwork']
                        .front_default
                    }
                    alt={pokeEvoInfo.name}
                  />
                )}
                <p key={pokeEvoInfo.id}>{pokeEvoInfo.name}</p>
              </div>
            </a>
          ))}
      </Evolution>
    </Container>
  );
}

Information.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(string).isRequired,
  flavor: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  genders: PropTypes.arrayOf(number).isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      base_stat: PropTypes.number.isRequired,
    }),
  ).isRequired,
  evolutions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      types: PropTypes.arrayOf(Object).isRequired,
      sprites: PropTypes.objectOf(Object).isRequired,
    }),
  ).isRequired,
};
